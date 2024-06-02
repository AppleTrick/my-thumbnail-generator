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

    const canvas = await html2canvas(thumbnailElement, {
      scale: 1,
      useCORS: true,
    });

    const resizedCanvas = document.createElement("canvas");
    const context = resizedCanvas.getContext("2d");
    resizedCanvas.width = thumbnailElement.offsetWidth;
    resizedCanvas.height = thumbnailElement.offsetHeight;

    if (context) {
      context.drawImage(
        canvas,
        0,
        0,
        resizedCanvas.width,
        resizedCanvas.height
      );
    }

    const dataUrl = resizedCanvas.toDataURL(`image/${format}`);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `thumbnail.${format}`;
    link.click();
  };
  return (
    <button className={styles.button} onClick={() => downloadImage(createType)}>
      Download as {createType}
    </button>
  );
};

export default CreateThumbnailButton;
