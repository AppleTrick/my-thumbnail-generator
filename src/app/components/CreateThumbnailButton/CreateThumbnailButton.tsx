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

    const originalBorder = thumbnailElement.style.border;
    thumbnailElement.style.border = "none";
    const { offsetWidth: width, offsetHeight: height } = thumbnailElement;
    const canvas = await html2canvas(thumbnailElement, {
      width,
      height,
      scale: 1,
      useCORS: true,
    });

    thumbnailElement.style.border = originalBorder;

    const dataUrl = canvas.toDataURL(`image/${format}`);
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

// const resizedCanvas = document.createElement("canvas");
// resizedCanvas.width = width;
// resizedCanvas.height = height;
// const context = resizedCanvas.getContext("2d");

// if (context) {
//   context.drawImage(canvas, 0, 0, width, height);
// }
