import React, { useState, useEffect } from 'react';
import { Button, Text } from '@chakra-ui/react';

const BumpFeature = () => {
  const [bumpsLeft, setBumpsLeft] = useState(5);

  const handleBump = () => {
    if (bumpsLeft > 0) {
      // Logic to bump the server
      setBumpsLeft(bumpsLeft - 1);
      alert('Server has been bumped!');
    } else {
      alert('You have no bumps left!');
    }
  };

  return (
    <div>
      <Text fontSize="xl" mb={4}>Bumps Left: {bumpsLeft}</Text>
      <Button colorScheme="blue" onClick={handleBump}>Bump Server</Button>
    </div>
  );
};

export default BumpFeature;