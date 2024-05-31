import styles from "./deleteButton.module.css";

interface DeleteButtonProps {
  deleteData?: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ deleteData }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        if (deleteData) deleteData();
      }}
      className={`${styles.deleteButton} ${styles.hidden}`}
    >
      ✕
    </button>
  );
};

export default DeleteButton;
