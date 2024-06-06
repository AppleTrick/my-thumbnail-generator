import { addImage, triggerFileInputClick } from '@/utils/utils';
import ChangeThumbnailSizeSelector from '../ChangeThumbnailSizeSelector/ChangeThumbnailSizeSelector';
import CreateThumbnailButton from '../CreateThumbnailButton/CreateThumbnailButton';
import TextEditor from '../TextEditor/TextEditor';
import styles from './sideBar.module.css';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { backgroundImageState, selectedIdState, thumbnailObjectState } from '@/common/store';
import { newTextTemplate } from '@/data/initialValues';

const SideBar = () => {
  const [backgroundImage, setBackgroundImage] = useRecoilState(backgroundImageState);
  const [thumbnailObject, setThumbnailObject] = useRecoilState(thumbnailObjectState);
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

  // 추가할 이미지를 잠시 저장해둘 state
  const [basicImage, setBasicImage] = useState<string | null>('');

  const BackgroundInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addObject = () => {
    const newText = { ...newTextTemplate, id: Date.now() };
    setThumbnailObject((prev) => [...prev, newText]);
    setSelectedId(newText.id);
  };

  useEffect(() => {
    if (basicImage) {
      const newImage = {
        id: Date.now(),
        src: basicImage,
      };
      setThumbnailObject((prev) => [...prev, newImage]);
      setSelectedId(newImage.id);
    }
  }, [basicImage]);

  return (
    <div className={styles.sidebar}>
      <ChangeThumbnailSizeSelector />
      <button className={styles.button} onClick={() => triggerFileInputClick(BackgroundInputRef)}>
        배경 이미지 추가하기
      </button>
      <input type="file" accept="image/*" ref={BackgroundInputRef} style={{ display: 'none' }} onChange={(e) => addImage(e, setBackgroundImage)} />

      <button className={styles.button} onClick={addObject}>
        텍스트 추가하기
      </button>

      <button className={styles.button} onClick={() => triggerFileInputClick(fileInputRef)}>
        이미지 추가하기
      </button>
      <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={(e) => addImage(e, setBasicImage)} />

      <TextEditor />

      <div className={styles.controlGroup}>
        <CreateThumbnailButton createType={'png'} />
        <CreateThumbnailButton createType={'jpg'} />
      </div>
    </div>
  );
};

export default SideBar;
