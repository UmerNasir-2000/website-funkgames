import { Container, SimpleGrid } from '@chakra-ui/react';
import useGame from '../../hooks/useGame';
import GameCard from '../gameCard';
import GameCardSkeleton from '../gameCard/skeleton';

export default function GameGrid(): JSX.Element {
  const { games, loading } = useGame();

  return (
    <Container maxW="7xl">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={4} padding={5}>
        {loading && [1, 2, 3, 4, 5, 6].map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => <GameCard key={game.id} {...game} />)}
      </SimpleGrid>
    </Container>
  );
}
