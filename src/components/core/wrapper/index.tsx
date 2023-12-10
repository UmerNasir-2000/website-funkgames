import { Container } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

export default function Wrapper({ children }: PropsWithChildren): JSX.Element {
  return <Container maxW="7xl">{children}</Container>;
}
