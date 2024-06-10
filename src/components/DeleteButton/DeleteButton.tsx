import { useRecoilState } from 'recoil';
import styles from './deleteButton.module.css';
import { selectedIdState, thumbnailObjectState } from '@/common/store';

interface DeleteButtonProps {
  id: number;
  zIndex: number;
}

const DeleteButton = ({ id, zIndex }: DeleteButtonProps) => {
  const [thumbnailObject, setThumbnailObject] = useRecoilState(thumbnailObjectState);
  const [selectedId, setSelectId] = useRecoilState(selectedIdState);

  const deleteData = () => {
    setThumbnailObject((prev) => prev.filter((object) => object.id !== id));
    setSelectId(null);
  };
  return (
    <button onClick={deleteData} className={`${styles.deleteButton} ${styles.hidden}`} style={{ zIndex: zIndex }}>
      ✕
    </button>
  );
};

export default DeleteButton;
