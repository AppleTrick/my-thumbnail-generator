import html2canvas from "html2canvas";
import styles from "./createThumbnailButton.module.css";

interface CreateThumbnailButtonProps {
  createType: "png" | "jpeg" | "jpg";
}

const CreateThumbnailButton: React.FC<CreateThumbnailButtonProps> = ({
  createType,
}) => {
  const downloadImage = async (format: "png" | "jpeg" | "jpg") => {
    const thumbnailElement = document.getElementById(
      "thumbnail"
    ) as HTMLElement;

    const deleteButtons = thumbnailElement.querySelectorAll(
      ".deleteButton"
    ) as NodeListOf<HTMLElement>;
    deleteButtons.forEach((button) => (button.style.display = "none"));

    const canvas = await html2canvas(thumbnailElement);
    const dataUrl = canvas.toDataURL(`image/${format}`);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `thumbnail.${format}`;
    link.click();

    deleteButtons.forEach((button) => (button.style.display = "block"));
  };
  return (
    <button className={styles.button} onClick={() => downloadImage(createType)}>
      Download as {createType}
    </button>
  );
};

export default CreateThumbnailButton;
