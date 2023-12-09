import { Heading, Image, Text } from '@chakra-ui/react';
import logo from './assets/logo.svg';

export default function App(): JSX.Element {
  return (
    <>
      <Image src={logo}/>
      <Heading>FUNK GAMES</Heading>
      <Text>Testing...</Text>
    </>
  );
}
