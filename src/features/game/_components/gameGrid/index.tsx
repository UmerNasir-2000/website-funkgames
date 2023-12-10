import { SimpleGrid } from '@chakra-ui/react';
import Wrapper from '../../../../components/core/wrapper';
import { useFetchGamesQuery } from '../../../slices/apiSlice';
import GameCard from '../gameCard';
import GameCardSkeleton from '../gameCard/skeleton';

export default function GameGrid(): JSX.Element {
  const { data: games, isLoading: loading, isFetching } = useFetchGamesQuery();

  return (
    <Wrapper>
      <SimpleGrid
        columns={{
          sm: 1, md: 2, lg: 3, xl: 4,
        }}
        gap={4}
        padding={5}
      >
        {(loading || isFetching) && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
          .map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games?.map((game) => <GameCard key={game.id} {...game} />)}
      </SimpleGrid>
    </Wrapper>
  );
}
