import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<{ email: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Отримання токена з localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You need to log in first.');
      navigate('/'); // Перенаправляємо на головну
      return;
    }

    // Запит до бекенду для отримання даних користувача
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      }
    };

    fetchUserData();
  }, [navigate]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Profile</h1>
      <p>Email: {userData.email}</p>
    </div>
  );
};
