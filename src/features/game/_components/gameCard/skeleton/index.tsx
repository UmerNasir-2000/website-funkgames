import {
  Card, CardBody,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

export default function GameCardSkeleton(): JSX.Element {
  return (
    <Card borderRadius="lg" overflowX="hidden" cursor="pointer">
      <Skeleton h="250px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
