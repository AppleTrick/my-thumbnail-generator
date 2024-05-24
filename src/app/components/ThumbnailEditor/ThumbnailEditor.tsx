import { useRef } from "react";
import Draggable from "react-draggable";
import styles from "./ThumbnailEditor.module.css";

interface Text {
  id: number;
  content: string;
  color: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  fontSize: string;
  fontFamily: string;
}

interface ThumbnailEditorProps {
  backgroundImage: string | null;
  texts: Text[];
  additionalImage: string | null;
  setSelectedTextId: (id: number | null) => void;
  setSelectedAdditionalImageId: (id: number | null) => void;
  deleteText: (id: number) => void;
  deleteAdditionalImage: () => void;
}

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
        <Draggable key={text.id} nodeRef={thumbnailRef}>
          <div
            className={styles.text}
            style={{
              color: text.color,
              fontWeight: text.fontWeight,
              fontStyle: text.fontStyle,
              textDecoration: text.textDecoration,
              fontSize: text.fontSize,
              fontFamily: text.fontFamily,
            }}
            onClick={() => setSelectedTextId(text.id)}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {text.content}
            <button
              className={`${styles.deleteButton} deleteButton`}
              onClick={(e) => {
                e.stopPropagation();
                deleteText(text.id);
              }}
            >
              ✕
            </button>
          </div>
        </Draggable>
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
