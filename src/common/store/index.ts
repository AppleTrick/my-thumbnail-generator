import { TextOrSrcImageArray } from '@/app/type';
import { initailThumbnailSizes } from '@/data/initialValues';
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
  default: initailThumbnailSizes[0],
});

export const selectedIdState = atom<number | null>({
  key: 'selectedId',
  default: null,
});
