import { addImage, triggerFileInputClick } from '@/utils/utils';
import ChangeThumbnailSizeSelector from '../ChangeThumbnailSizeSelector/ChangeThumbnailSizeSelector';
import CreateThumbnailButton from '../CreateThumbnailButton/CreateThumbnailButton';
import TextEditor from '../TextEditor/TextEditor';
import styles from './sideBar.module.css';
import { Dispatch, RefObject, SetStateAction } from 'react';
import { Text } from '@/app/type';

interface SideBarProps {
  BackgroundInputRef: RefObject<HTMLInputElement>;
  fileInputRef: RefObject<HTMLInputElement>;
  addText: () => void;
  selectedTextId: number | null;
  texts: Text[];
  updateText: (id: number, updates: Partial<Text>) => void;
  setBackgroundImage: Dispatch<SetStateAction<string | null>>;
  setBasicImage: Dispatch<SetStateAction<string | null>>;
  setThumbnailSize: Dispatch<
    SetStateAction<{
      width: number;
      height: number;
    }>
  >;
}

const SideBar: React.FC<SideBarProps> = ({ setThumbnailSize, BackgroundInputRef, fileInputRef, addText, selectedTextId, texts, updateText, setBasicImage, setBackgroundImage }) => {
  return (
    <div className={styles.sidebar}>
      <ChangeThumbnailSizeSelector setThumbnailSize={setThumbnailSize} />
      <button className={styles.button} onClick={() => triggerFileInputClick(BackgroundInputRef)}>
        배경 이미지 추가하기
      </button>
      <input type="file" accept="image/*" ref={BackgroundInputRef} style={{ display: 'none' }} onChange={(e) => addImage(e, setBackgroundImage)} />

      <button className={styles.button} onClick={addText}>
        텍스트 추가하기
      </button>
      <button className={styles.button} onClick={() => triggerFileInputClick(fileInputRef)}>
        이미지 추가하기
      </button>
      <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={(e) => addImage(e, setBasicImage)} />

      <TextEditor selectedTextId={selectedTextId} texts={texts} updateText={updateText} />

      <div className={styles.controlGroup}>
        <CreateThumbnailButton createType={'png'} />
        <CreateThumbnailButton createType={'jpg'} />
      </div>
    </div>
  );
};

export default SideBar;
