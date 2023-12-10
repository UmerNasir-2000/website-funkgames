import {
  Card, CardBody, Heading, Image,
} from '@chakra-ui/react';
import { type GameModel } from '../../hooks/useGame';
import PlatformList from './platformList';

const getCroppedImage = (url: string): string => `https://media.rawg.io/media/crop/600/400/games/${url.split('games/')?.[1]}`;

type Props = GameModel;

export default function GameCard({ background_image, name, parent_platforms }: Props): JSX.Element {
  return (
    <Card borderRadius="lg" overflowX="hidden" cursor="pointer">
      <Image src={getCroppedImage(background_image)} alt={name} />
      <CardBody>
        <Heading as="h2" size="md" mb={2}>{name}</Heading>
        <PlatformList platforms={parent_platforms.map((p) => p.platform)} />
      </CardBody>
    </Card>
  );
}
