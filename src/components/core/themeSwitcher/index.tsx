import {
  HStack, Switch, Text, useColorMode,
} from '@chakra-ui/react';
import { useMemo } from 'react';

export default function ThemeSwitcher(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDarkMode = useMemo(() => colorMode === 'dark', [colorMode]);

  return (
    <HStack>
      <Switch size="md" colorScheme="green" onChange={toggleColorMode} isChecked={isDarkMode} />
      <Text>Mode</Text>
    </HStack>
  );
}
