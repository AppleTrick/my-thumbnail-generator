import { TextOrSrcImageArray } from '@/app/type';
import { thumbnailSizes } from '@/data/initialValues';
import { atom } from 'recoil';

export const thumbnailObjectState = atom<TextOrSrcImageArray>({
  key: 'thumbnailObject',
  default: [],
});

export const backgroundImageState = atom<string | null>({
  key: 'backgroundimage',
  default: null,
});

export const thumbnailSizeState = atom({
  key: 'thumbnailSize',
  default: thumbnailSizes[0],
});
