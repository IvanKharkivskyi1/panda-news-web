import { Box, Text } from '@chakra-ui/react';

export const Countries = () => {
  return (
    <Box flexGrow={1}>
      <Text>&quot;Countries&quot;</Text>
    </Box>
  );
};

// import { Container } from '@mui/material';
// import { useState } from 'react';

// import type { Country } from '@/shared';
// import {
//   CountryList,
//   EmptyState,
//   FilterDropdown,
//   SearchBar,
//   SortDropdown,
// } from '../components';

// import { useEnrichedCountries } from '../hooks/useEnrichedCountries';
// import { useFilteredCountries } from '../hooks/useFilteredCountries';

// export const Countries = ({ countries }: { countries: Country[] }) => {
//   const [query, setQuery] = useState<string>('');
//   const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
//   const [sortKey, setSortKey] = useState<string>('name');
//   const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

//   const { enrichedCountries, isLoading } = useEnrichedCountries(countries);
//   const filteredCountries = useFilteredCountries(
//     enrichedCountries,
//     query,
//     selectedRegion,
//     sortKey,
//     sortDirection
//   );

//   const handleSearch = (query: string) => {
//     setQuery(query);
//   };

//   const handleFilter = (region: string) => {
//     setSelectedRegion(region || null);
//   };

//   const handleSort = (key: string, direction: 'asc' | 'desc') => {
//     setSortKey(key);
//     setSortDirection(direction);
//   };

//   return (
//     <>
//       <Container className="home-page">
//         <div className="filters-wrap">
//           <SearchBar onSearch={handleSearch} />
//           <div className="filters">
//             <FilterDropdown
//               options={['Asia', 'Europe', 'Africa', 'Oceania', 'America']}
//               onFilter={handleFilter}
//               label="Filter by Region"
//             />
//             <SortDropdown
//               options={[
//                 { label: 'Name (A-Z)', value: 'name-asc' },
//                 { label: 'Name (Z-A)', value: 'name-desc' },
//                 { label: 'Temperature (Low-High)', value: 'temperature-asc' },
//                 { label: 'Temperature (High-Low)', value: 'temperature-desc' },
//               ]}
//               onSort={handleSort}
//               label="Sort by:"
//             />
//           </div>
//         </div>
//         {filteredCountries.length === 0 && !isLoading ? (
//           <EmptyState message="No results found. Try adjusting your search, filters, or sorting." />
//         ) : (
//           <CountryList countries={filteredCountries} isLoading={isLoading} />
//         )}
//       </Container>
//     </>
//   );
// };
