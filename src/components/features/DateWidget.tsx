import React, { useState } from 'react';

import { Box, Button, Card, Input, Text } from '@chakra-ui/react';

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
    <Card>
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
    </Card>
  );
};
