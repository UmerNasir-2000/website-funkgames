import {
  Box,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';
import ThemeSwitcher from '../themeSwitcher';
import Wrapper from '../wrapper';

export default function Navbar(): JSX.Element {
  return (
    <Box boxShadow="2xl">
      <Wrapper>
        <HStack padding={3} justifyContent="space-between" alignItems="center">
          <Heading cursor="pointer" fontFamily="cursive">
            Funk Games
          </Heading>
          <Show above="md">
            <InputGroup w="65%">
              <InputLeftElement pointerEvents="none">
                <AiOutlineSearch color="gray.300" />
              </InputLeftElement>
              <Input type="text" placeholder="Search Games By Title Or Genre..." paddingY={5} sx={{ borderRadius: '100px' }} />
            </InputGroup>
          </Show>
          <ThemeSwitcher />
        </HStack>
      </Wrapper>
    </Box>
  );
}
