import styles from "./thumbnailContainer.module.css";

interface ThumbnailContainerProps {
  children: React.ReactNode;
}
const ThumbnailContainer: React.FC<ThumbnailContainerProps> = ({
  children,
}) => {
  return <div className={styles.container}>{children}</div>;
};

export default ThumbnailContainer;
