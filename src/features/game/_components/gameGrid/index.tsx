import { Container, SimpleGrid } from '@chakra-ui/react';
import useGame from '../../hooks/useGame';
import GameCard from '../gameCard';

export default function GameGrid(): JSX.Element {
  const { games } = useGame();

  return (
    <Container maxW="7xl">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={4} padding={5}>
        {games.map((game) => <GameCard key={game.id} {...game} />)}
      </SimpleGrid>
    </Container>
  );
}
