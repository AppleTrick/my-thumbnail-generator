import { SrcImage, Text } from '@/app/type';
import { zIndex } from 'html2canvas/dist/types/css/property-descriptors/z-index';

// 썸네일 크기 사이즈 생성값들
export const initailThumbnailSizes = [
  { width: 1280, height: 720 },
  { width: 300, height: 300 },
  { width: 400, height: 400 },
  { width: 500, height: 500 },
  { width: 600, height: 480 },
  { width: 800, height: 800 },
  { width: 800, height: 600 },
];

// 초기 생성시 텍스트의 값
export const newTextTemplate = {
  id: Date.now(),
  content: 'New Text',
  color: '#000000',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  fontSize: '36px',
  fontFamily: 'Jua',
  userSelect: 'none',
};

// 처음
export const NewTextStyle = (text: Text) => {
  return {
    color: text.color,
    fontWeight: text.fontWeight,
    fontStyle: text.fontStyle,
    textDecoration: text.textDecoration,
    fontSize: text.fontSize,
    fontFamily: text.fontFamily,
    zIndex: text.zIndex,
  };
};

export const NewImage = (length: number, basicImage: string) => {
  return {
    id: Date.now(),
    src: basicImage,
    zIndex: length,
  };
};
