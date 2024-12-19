import React, { useState } from 'react';

import { Card } from '@/ui-components';
import { Button, FormControl, Input, Text, VStack } from '@chakra-ui/react';

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
      <VStack>
        <Text fontWeight="bold" fontSize="lg">
          Date Widget
        </Text>
        <FormControl>
          <Input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            placeholder="Select a date"
          />
        </FormControl>
        <Button colorScheme="green" onClick={handleTodayClick}>
          Set Today
        </Button>
        <Text>Selected Date: {selectedDate || 'None'}</Text>
      </VStack>
    </Card>
  );
};
