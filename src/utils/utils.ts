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

// 이미지 파일을 불러와서 추가 하는 함수
export const addImage = (e: React.ChangeEvent<HTMLInputElement>, setImage: (image: string | null) => void, ref: RefObject<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
      if (ref.current) {
        ref.current.value = '';
      }
    };
    reader.readAsDataURL(file);
  }
};
