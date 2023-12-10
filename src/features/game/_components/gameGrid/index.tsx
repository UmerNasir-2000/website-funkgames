import { Container, SimpleGrid, Spinner } from '@chakra-ui/react';
import useGame from '../../hooks/useGame';
import GameCard from '../gameCard';

export default function GameGrid(): JSX.Element {
  const { games, loading } = useGame();

  return (
    <>
      {loading && <Spinner />}
      <Container maxW="7xl">
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={4} padding={5}>
          {games.map((game) => <GameCard key={game.id} {...game} />)}
        </SimpleGrid>
      </Container>
    </>
  );
}
