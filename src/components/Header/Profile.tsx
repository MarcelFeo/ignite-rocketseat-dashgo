import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcel Féo</Text>
          <Text color="gray.300" fontSize="small">
            marcelfeo29@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Marcel Féo" src="https://github.com/MarcelFeo.png"/>
    </Flex>
  );
} 