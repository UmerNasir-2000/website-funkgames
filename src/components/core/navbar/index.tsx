import {
  Box,
  Container,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import ThemeSwitcher from '../themeSwitcher';

export default function Navbar(): JSX.Element {
  return (
    <Box boxShadow="2xl">
      <Container maxW="7xl">
        <HStack padding={3} justifyContent="space-between" alignItems="center">
          <Heading cursor="pointer" fontFamily="cursive">
            Funk Games
          </Heading>
          <InputGroup w="65%" display={{ sm: 'none', md: 'block' }}>
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch color="gray.300" />
            </InputLeftElement>
            <Input type="text" placeholder="Search Games By Title Or Genre..." paddingY={5} sx={{ borderRadius: '100px' }} />
          </InputGroup>
          <ThemeSwitcher />
        </HStack>
      </Container>
    </Box>
  );
}
