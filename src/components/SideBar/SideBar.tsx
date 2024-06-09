import { addImage, triggerFileInputClick } from '@/utils/utils';
import ChangeThumbnailSizeSelector from '../ChangeThumbnailSizeSelector/ChangeThumbnailSizeSelector';
import CreateThumbnailButton from '../CreateThumbnailButton/CreateThumbnailButton';
import TextEditor from '../TextEditor/TextEditor';
import styles from './sideBar.module.css';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { backgroundImageState, selectedIdState, thumbnailObjectState } from '@/common/store';
import { NewImage, newTextTemplate } from '@/data/initialValues';
import { zIndex } from 'html2canvas/dist/types/css/property-descriptors/z-index';

const SideBar = () => {
  const [backgroundImage, setBackgroundImage] = useRecoilState(backgroundImageState);
  const [thumbnailObject, setThumbnailObject] = useRecoilState(thumbnailObjectState);
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

  // 추가할 이미지를 잠시 저장해둘 state
  const [basicImage, setBasicImage] = useState<string | null>('');

  const BackgroundInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addObject = () => {
    const newText = { ...newTextTemplate, id: Date.now(), zIndex: thumbnailObject.length };
    setThumbnailObject((prev) => [...prev, newText]);
    setSelectedId(newText.id);
  };

  useEffect(() => {
    if (basicImage) {
      const newImage = NewImage(thumbnailObject.length, basicImage);
      setThumbnailObject((prev) => [...prev, newImage]);
      setSelectedId(newImage.id);
      setBasicImage('');
    }
  }, [basicImage, setThumbnailObject, setSelectedId, setBasicImage, thumbnailObject.length]);

  const onLog = () => {
    console.log(thumbnailObject);
  };

  const onWhatSelect = () => {
    console.log(selectedId);
  };

  const consoleLogbasicImage = () => {
    console.log(basicImage);
  };

  const objectUp = (id: number) => {
    console.log('오브젝트 올리기');
    const index = thumbnailObject.findIndex((el) => el.id === id);
    if (index > 0) {
      [thumbnailObject[index].zIndex, thumbnailObject[index - 1].zIndex] = [thumbnailObject[index - 1].zIndex, thumbnailObject[index].zIndex];
    }
  };

  const objectDown = () => {
    console.log('오브젝트 내리기');
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

      <button onClick={onLog}>object 값 출력</button>
      <button onClick={onWhatSelect}>현재 선택값 출력</button>
      <button onClick={consoleLogbasicImage}>basicImage값 출력</button>
      <div className={styles.controlGroup}>
        <button className={styles.button} onClick={objectDown}>
          뒤로 보내기
        </button>
        <button className={styles.button}>앞으로 보내기</button>
      </div>
      <TextEditor />

      <div className={styles.controlGroup}>
        <CreateThumbnailButton createType={'png'} />
        <CreateThumbnailButton createType={'jpg'} />
      </div>
    </div>
  );
};

export default SideBar;
