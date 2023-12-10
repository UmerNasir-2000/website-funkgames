import { SimpleGrid } from '@chakra-ui/react';
import Wrapper from '../../../../components/core/wrapper';
import useGame from '../../hooks/useGame';
import GameCard from '../gameCard';
import GameCardSkeleton from '../gameCard/skeleton';

export default function GameGrid(): JSX.Element {
  const { games, loading } = useGame();

  return (
    <Wrapper>
      <SimpleGrid
        columns={{
          sm: 1, md: 2, lg: 3, xl: 4,
        }}
        gap={4}
        padding={5}
      >
        {loading && [1, 2, 3, 4, 5, 6, 7, 8, 9]
          .map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => <GameCard key={game.id} {...game} />)}
      </SimpleGrid>
    </Wrapper>
  );
}
