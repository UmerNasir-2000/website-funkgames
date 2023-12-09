import {
  Box, Container, HStack, Image,
} from '@chakra-ui/react';
import logo from '../../../assets/logo-light.svg';

export default function Navbar(): JSX.Element {
  return (
    <Box bg="gray.700">
      <Container maxW="7xl">
        <HStack paddingX={3} paddingY={2}>
          <Box cursor="pointer">
            <Image src={logo} alt="Funk Games" />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
