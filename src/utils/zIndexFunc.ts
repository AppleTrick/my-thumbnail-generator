import { thumbnailObjectState } from '@/common/store';
import { useRecoilState } from 'recoil';

// eslint-disable-next-line react-hooks/rules-of-hooks
const [thumbnailObject, setThumbnailObject] = useRecoilState(thumbnailObjectState);

const upDownZIndex = (id: number, increment: number) => {
  setThumbnailObject((object) => {
    const index = object.findIndex((el) => el.id === id);
    const newElements = [...object];
    if (index !== -1) {
      const newZIndex = newElements[index].zIndex + increment;
      const conflictingIndex = newElements.findIndex((el) => el.zIndex === newZIndex);

      if (conflictingIndex !== -1) {
        newElements[conflictingIndex].zIndex = newElements[index].zIndex;
      }

      newElements[index].zIndex = newZIndex;
    }
    return newElements;
  });
};
