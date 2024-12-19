import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

interface DateWidgetProps {
  initialDate?: string;
}

export const DateWidget: React.FC<DateWidgetProps> = ({ initialDate }) => {
  const [selectedDate, setSelectedDate] = useState<string>(initialDate || '');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleTodayClick = () => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
  };

  return (
    <VStack
      spacing={4}
      p={4}
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      boxShadow="sm"
      align="start"
    >
      <Text fontWeight="bold" fontSize="lg">
        Date Widget
      </Text>
      <Box>
        <Input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          placeholder="Select a date"
        />
      </Box>
      <Button colorScheme="teal" onClick={handleTodayClick}>
        Set Today
      </Button>
      <Text>Selected Date: {selectedDate || 'None'}</Text>
    </VStack>
  );
};
