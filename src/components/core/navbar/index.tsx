import {
  Box, Container, HStack, Image,
} from '@chakra-ui/react';
import logo from '../../../assets/logo-light.svg';
import ThemeSwitcher from '../themeSwitcher';

export default function Navbar(): JSX.Element {
  return (
    <Box bg="gray.700">
      <Container maxW="7xl">
        <HStack paddingX={3} paddingY={2} justifyContent="space-between" alignItems="center">
          <Box cursor="pointer">
            <Image src={logo} alt="Funk Games" />
          </Box>
          <ThemeSwitcher />
        </HStack>
      </Container>
    </Box>
  );
}
