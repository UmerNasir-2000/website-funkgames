import {
  Box,
  Container,
  HStack,
  Heading,
} from '@chakra-ui/react';
import ThemeSwitcher from '../themeSwitcher';

export default function Navbar(): JSX.Element {
  return (
    <Box boxShadow="2xl">
      <Container maxW="7xl">
        <HStack padding={3} justifyContent="space-between" alignItems="center">
          <Heading cursor="pointer" fontFamily="cursive">
            Funk Games
          </Heading>
          <ThemeSwitcher />
        </HStack>
      </Container>
    </Box>
  );
}
