import { addImage, triggerFileInputClick } from '@/utils/utils';
import ChangeThumbnailSizeSelector from '../ChangeThumbnailSizeSelector/ChangeThumbnailSizeSelector';
import CreateThumbnailButton from '../CreateThumbnailButton/CreateThumbnailButton';
import TextEditor from '../TextEditor/TextEditor';
import styles from './sideBar.module.css';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { backgroundImageState, selectedIdState, thumbnailObjectState } from '@/common/store';
import { NewImage, newTextTemplate } from '@/data/initialValues';

const SideBar = () => {
  const [backgroundImage, setBackgroundImage] = useRecoilState(backgroundImageState);
  const [thumbnailObject, setThumbnailObject] = useRecoilState(thumbnailObjectState);
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

  // 추가할 이미지를 잠시 저장해둘 state
  const [basicImage, setBasicImage] = useState<string | null>('');

  const BackgroundInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addObject = () => {
    const newText = { ...newTextTemplate, id: Date.now(), zIndex: thumbnailObject.length + 1 };
    setThumbnailObject((prev) => [...prev, newText]);
    setSelectedId(newText.id);
  };

  useEffect(() => {
    if (basicImage) {
      const newImage = NewImage(thumbnailObject.length + 1, basicImage);
      setThumbnailObject((prev) => [...prev, newImage]);
      setSelectedId(newImage.id);
      setBasicImage('');
    }
  }, [basicImage, setThumbnailObject, setSelectedId, setBasicImage, thumbnailObject.length]);

  // TestCode
  // const onLog = () => {
  //   console.log(thumbnailObject);
  // };

  // const onWhatSelect = () => {
  //   console.log(selectedId);
  // };

  // const consoleLogbasicImage = () => {
  //   console.log(basicImage);
  // };

  const upDownZIndex = (id: number | null, increment: number) => {
    if (id === null) return;
    setThumbnailObject((prev) => {
      const newThumbnailObject = [...prev]; // 요소 복사
      const index = newThumbnailObject.findIndex((el) => el.id === id); // id값과 동일안 object 요소 소환
      if (index !== -1 && newThumbnailObject[index] !== undefined) {
        const currentZIndex = newThumbnailObject[index].zIndex;
        const newZIndex = currentZIndex + increment;

        if (newZIndex <= 0) return newThumbnailObject;
        if (newZIndex > thumbnailObject.length) return newThumbnailObject;

        const conflictingIndex = newThumbnailObject.findIndex((el) => el.zIndex === newZIndex);
        if (conflictingIndex !== -1 && newThumbnailObject[conflictingIndex] !== undefined) {
          newThumbnailObject[conflictingIndex] = {
            ...newThumbnailObject[conflictingIndex],
            zIndex: currentZIndex,
          };
        }

        newThumbnailObject[index] = {
          ...newThumbnailObject[index],
          zIndex: newZIndex,
        };

        // Ensure the array is sorted by zIndex to maintain order
        // newThumbnailObject.sort((a, b) => a.zIndex - b.zIndex);
      }

      return newThumbnailObject;
    });
  };

  return (
    <div className={styles.sidebar}>
      <ChangeThumbnailSizeSelector />
      <button className={styles.button} onClick={() => triggerFileInputClick(BackgroundInputRef)}>
        배경 이미지 추가하기
      </button>
      <input type="file" accept="image/*" ref={BackgroundInputRef} style={{ display: 'none' }} onChange={(e) => addImage(e, setBackgroundImage, BackgroundInputRef)} />

      <button className={styles.button} onClick={addObject}>
        텍스트 추가하기
      </button>

      <button className={styles.button} onClick={() => triggerFileInputClick(fileInputRef)}>
        이미지 추가하기
      </button>
      <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={(e) => addImage(e, setBasicImage, fileInputRef)} />

      {/* <button onClick={onLog}>object 값 출력</button> */}
      {/* <button onClick={onWhatSelect}>현재 선택값 출력</button> */}
      {/* <button onClick={consoleLogbasicImage}>basicImage값 출력</button>/ */}
      <div className={styles.controlGroup}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => upDownZIndex(selectedId, -1)}>
            뒤로 보내기
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => upDownZIndex(selectedId, 1)}>
            앞으로 보내기
          </button>
        </div>
      </div>
      <TextEditor />

      <div className={styles.controlGroup}>
        <div className={styles.buttonContainer}>
          <CreateThumbnailButton createType={'png'} />
        </div>
        <div className={styles.buttonContainer}>
          <CreateThumbnailButton createType={'jpg'} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
