import { Switch, useColorMode } from '@chakra-ui/react';
import { useMemo } from 'react';

export default function ThemeSwitcher(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDarkMode = useMemo(() => colorMode === 'dark', [colorMode]);

  return <Switch size="md" colorScheme="green" onChange={toggleColorMode} checked={isDarkMode} />;
}
