import { Text } from '../type';

// 썸네일 크기 사이즈 생성값들
export const thumbnailSizes = [
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
};

// 처음
export const MyTextStyle = (text: Text) => {
  return {
    color: text.color,
    fontWeight: text.fontWeight,
    fontStyle: text.fontStyle,
    textDecoration: text.textDecoration,
    fontSize: text.fontSize,
    fontFamily: text.fontFamily,
  };
};
