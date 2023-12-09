import {
  HStack, Switch, Text, useColorMode,
} from '@chakra-ui/react';
import { useMemo } from 'react';

export default function ThemeSwitcher(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDarkMode = useMemo(() => colorMode === 'dark', [colorMode]);

  return (
    <HStack>
      <Switch size="lg" colorScheme="green" onChange={toggleColorMode} checked={isDarkMode} />
      <Text>Mode</Text>
    </HStack>
  );
}
