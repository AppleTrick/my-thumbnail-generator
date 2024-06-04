import { RefObject } from 'react';

// 파일 대신 클릭해주는 함수
export const triggerFileInputClick = (inputRef: RefObject<HTMLInputElement>) => {
  if (inputRef.current) {
    inputRef.current.click();
  }
};

// div에 겹겹히 쌓여있는 div태그의 정확한 위치 알수 있게 하기
export const getOffset = (element: HTMLElement | null): { left: number; top: number } => {
  let offsetLeft = 0;
  let offsetTop = 0;
  while (element) {
    offsetLeft += element.offsetLeft - element.scrollLeft + element.clientLeft;
    offsetTop += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent as HTMLElement;
  }
  return { left: offsetLeft, top: offsetTop };
};
