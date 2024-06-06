import { initailThumbnailSizes } from '@/data/initialValues';
import styles from './changeThumbnailSizeSelector.module.css';
import { useRecoilState } from 'recoil';
import { thumbnailSizeState } from '@/common/store';

const ChangeThumbnailSizeSelector = () => {
  const [thumbnailSize, setThumbnailSize] = useRecoilState(thumbnailSizeState);
  return (
    <div className={styles.controlGroup}>
      <label>썸네일 크기: </label>
      <select onChange={(e) => setThumbnailSize(initailThumbnailSizes[parseInt(e.target.value, 10)])}>
        {initailThumbnailSizes.map((size, index) => (
          <option value={index} key={index}>
            {size.width} x {size.height}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeThumbnailSizeSelector;
