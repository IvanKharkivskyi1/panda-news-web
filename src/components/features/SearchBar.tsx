import { Input } from "@chakra-ui/react";
import React, { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <Input
      type="search"
      value={query}
      onChange={handleChange}
      placeholder="Search countries..."
      size="small"
    />
  );
};
