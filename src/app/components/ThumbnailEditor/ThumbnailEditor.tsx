import { useRef } from "react";
import Draggable from "react-draggable";
import styles from "./ThumbnailEditor.module.css";
import MyDraggable from "../MyDraggable/MyDraggable";
import { ThumbnailEditorProps } from "@/app/type";

const ThumbnailEditor: React.FC<ThumbnailEditorProps> = ({
  backgroundImage,
  texts,
  additionalImage,
  setSelectedTextId,
  setSelectedAdditionalImageId,
  deleteText,
  deleteAdditionalImage,
}) => {
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const additionalImageRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="thumbnail"
      ref={thumbnailRef}
      className={styles.thumbnail}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {texts.map((text) => (
        <MyDraggable key={text.id}>
          <span
            style={{
              color: text.color,
              fontWeight: text.fontWeight,
              fontStyle: text.fontStyle,
              textDecoration: text.textDecoration,
              fontSize: text.fontSize,
              fontFamily: text.fontFamily,
            }}
            onClick={() => setSelectedTextId(text.id)}
          >
            {text.content}
          </span>
        </MyDraggable>
      ))}
      {additionalImage && (
        <Draggable nodeRef={additionalImageRef}>
          <div
            ref={additionalImageRef}
            className={styles.additionalImageContainer}
            onClick={() => setSelectedAdditionalImageId(Date.now())}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <img
              src={additionalImage}
              className={styles.additionalImage}
              alt="additional"
            />
            <button
              className={`${styles.deleteButton} deleteButton`}
              onClick={(e) => {
                e.stopPropagation();
                deleteAdditionalImage();
              }}
            >
              ✕
            </button>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default ThumbnailEditor;
