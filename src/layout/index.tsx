import { Box } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';
import { Navbar } from '../components/core';

export default function LayoutProvider({ children }: PropsWithChildren): JSX.Element {
  return (
    <Box
      as="main"
    >
      <Navbar />
      {children}
    </Box>
  );
}
