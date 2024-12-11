// import { createContext, useContext, useEffect, useState } from 'react';
// import { fetchCountries } from '../../../services/api/api';
// import type { Country } from '../../../shared';
// const CountriesContext = createContext<Country[] | null>(null);

// interface CountriesProviderProps {
//   children: React.ReactNode;
// }

// export const CountriesProvider: React.FC<CountriesProviderProps> = ({
//   children,
// }) => {
//   const [countries, setCountries] = useState<Country[] | null>(null);

//   useEffect(() => {
//     console.log('CountriesProvider initialized');
//     const loadCountries = async () => {
//       const data = await fetchCountries();
//       console.log('Fetched countries:', data);
//       setCountries(data);
//     };
//     loadCountries();
//   }, []);

//   return (
//     <CountriesContext.Provider value={countries}>
//       {children}
//     </CountriesContext.Provider>
//   );
// };

// export const useCountries = () => {
//   const context = useContext(CountriesContext);
//   if (context === null) {
//     throw new Error('useCountries must be used within a CountriesProvider');
//   }
//   return context;
// };
export {};
