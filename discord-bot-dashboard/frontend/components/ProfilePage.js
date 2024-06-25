import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from backend API here
    // Example: fetchUser()
    setUser(userData);
    setLoading(false);
  }, []);

  const handleUpdateProfile = () => {
    // Logic to update user profile
  };

  return (
    <Box p={4}>
      {loading ? (
        <Text>Loading user profile...</Text>
      ) : user ? (
        <Flex direction="column">
          <Heading mb={4}>Profile Information</Heading>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input value={user.username} isReadOnly />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
          </FormControl>
          <Button mt={4} colorScheme="blue" onClick={handleUpdateProfile}>
            Update Profile
          </Button>
        </Flex>
      ) : (
        <Text>No user found</Text>
      )}
    </Box>
  );
};

export default ProfilePage;