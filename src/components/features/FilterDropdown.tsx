import { FormControl, FormLabel, Select } from '@chakra-ui/react';

export const FilterDropdown = ({
  options,
  onFilter,
  label,
}: {
  options: string[];
  onFilter: (value: string) => void;
  label: string;
}) => {
  return (
    <FormControl>
      <FormLabel>{label}:</FormLabel>
      <Select onChange={e => onFilter(e.target.value)} size="lg">
        <option value="">All</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
