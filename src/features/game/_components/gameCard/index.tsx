import {
  Card, CardBody, Heading, Image,
} from '@chakra-ui/react';
import { type GameModel } from '../../hooks/useGame';

type Props = GameModel;

export default function GameCard({ background_image, name }: Props): JSX.Element {
  return (
    <Card borderRadius="lg" overflowX="hidden" cursor="pointer">
      <Image src={background_image} alt={name} />
      <CardBody>
        <Heading as="h2" size="md">{name}</Heading>
      </CardBody>
    </Card>
  );
}
