import styles from "./closeButton.module.css";

interface CloseButtonProps {
  deleteText?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ deleteText }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        if (deleteText) deleteText();
      }}
      className={styles.deleteButton}
    >
      ✕
    </button>
  );
};

export default CloseButton;
