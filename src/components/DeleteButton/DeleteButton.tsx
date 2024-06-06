import { useRecoilState } from 'recoil';
import styles from './deleteButton.module.css';
import { selectedIdState, thumbnailObjectState } from '@/common/store';

const DeleteButton = () => {
  const [thumbnailObject, setThumbnailObject] = useRecoilState(thumbnailObjectState);
  const [selectedId, setSelectId] = useRecoilState(selectedIdState);

  const deleteData = () => {
    setThumbnailObject((prev) => prev.filter((object) => object.id !== selectedId));
  };
  return (
    <button onClick={deleteData} className={`${styles.deleteButton} ${styles.hidden}`}>
      ✕
    </button>
  );
};

export default DeleteButton;
