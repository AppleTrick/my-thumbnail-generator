import styles from "./thumbnailContainer.module.css";

interface ThumbnailContainerProps {
  children: React.ReactNode;
}
const ThumbnailContainer: React.FC<ThumbnailContainerProps> = ({
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailDataContainer}>{children}</div>
      <button className={styles.deleteButton}>✕</button>
    </div>
  );
};

export default ThumbnailContainer;
