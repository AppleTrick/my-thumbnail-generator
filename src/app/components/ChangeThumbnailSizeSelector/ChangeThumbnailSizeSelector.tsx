import { thumbnailSizes } from '@/app/data/initialValues';
import styles from './changeThumbnailSizeSelector.module.css';

interface ChangeThumbnailSizeSelectorProps {
  setThumbnailSize: (size: { width: number; height: number }) => void;
}

const ChangeThumbnailSizeSelector: React.FC<ChangeThumbnailSizeSelectorProps> = ({ setThumbnailSize }) => {
  return (
    <div className={styles.controlGroup}>
      <label>썸네일 크기: </label>
      <select onChange={(e) => setThumbnailSize(thumbnailSizes[parseInt(e.target.value, 10)])}>
        {thumbnailSizes.map((size, index) => (
          <option value={index} key={index}>
            {size.width} x {size.height}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChangeThumbnailSizeSelector;
