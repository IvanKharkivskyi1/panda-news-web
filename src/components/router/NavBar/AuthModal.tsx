import { API_URL } from '@/config';
import { Button } from '@/ui-components';
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const AuthModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  const handleAuth = async () => {
    setError('');

    if (isRegister) {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      try {
        const response = await fetch(`${API_URL}/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          alert('Registration successful! Please log in.');
          setIsRegister(false);
        } else {
          const data = await response.json();
          setError(data.message || 'Registration failed');
        }
      } catch {
        setError('Something went wrong. Please try again.');
      }
    } else {
      try {
        const response = await fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
          localStorage.setItem('token', data.token);
          onClose();
          alert('Login successful!');
        } else {
          setError(data.message || 'Login failed');
        }
      } catch {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('You have been logged out.');
  };

  return (
    <>
      {token ? (
        <Button colorScheme="green" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button colorScheme="green" onClick={onOpen}>
          Login / Register
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isRegister ? 'Register' : 'Login'}</ModalHeader>
          <ModalBody>
            {error && <Text color="red.500">{error}</Text>}
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </FormControl>
              {isRegister && (
                <FormControl>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                </FormControl>
              )}
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="isRegister" mb="0">
                  Switch to {isRegister ? 'Login' : 'Register'}
                </FormLabel>
                <Switch
                  id="isRegister"
                  isChecked={isRegister}
                  onChange={e => setIsRegister(e.target.checked)}
                  colorScheme="green"
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" onClick={handleAuth}>
              {isRegister ? 'Register' : 'Login'}
            </Button>
            <Button variant="ghost" onClick={onClose} ml={3}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
