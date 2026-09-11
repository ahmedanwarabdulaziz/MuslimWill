import {
  PiScrollLight,
  PiUsersThreeLight,
  PiBankLight,
  PiFirstAidKitLight,
  PiCheckCircleLight,
} from 'react-icons/pi';
import type { PackageIconKey } from './schemas';

export const PACKAGE_ICON_MAP: Record<PackageIconKey, typeof PiScrollLight> = {
  scroll: PiScrollLight,
  usersThree: PiUsersThreeLight,
  bank: PiBankLight,
  firstAidKit: PiFirstAidKitLight,
  checkCircle: PiCheckCircleLight,
};
