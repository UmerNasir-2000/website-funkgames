import { HStack, Icon } from '@chakra-ui/react';
import { type IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import type { Platform } from '../../../hooks/useGame';

interface Props {
  platforms: Platform[]
}

const iconMap: Record<string, IconType> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

export default function PlatformList({ platforms }: Props): JSX.Element {
  return (
    <HStack>
      {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />)}
    </HStack>
  );
}
