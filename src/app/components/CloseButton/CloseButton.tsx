import styles from "./closeButton.module.css";

interface CloseButtonProps {
  deleteData?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ deleteData }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        if (deleteData) deleteData();
      }}
      className={styles.deleteButton}
    >
      ✕
    </button>
  );
};

export default CloseButton;
