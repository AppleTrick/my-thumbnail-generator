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
  deleteText: (id: number) => void;
}

const ThumbnailEditor: React.FC<ThumbnailEditorProps> = ({
  backgroundImage,
  texts,
  additionalImage,
  setSelectedTextId,
  deleteText,
}) => {
  const thumbnailRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="thumbnail"
      ref={thumbnailRef}
      className={styles.thumbnail}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {texts.map((text) => (
        <Draggable key={text.id}>
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
          >
            {text.content}
            <button
              className={styles.deleteButton}
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
        <Draggable>
          <img
            src={additionalImage}
            className={styles.additionalImage}
            alt="additional"
          />
        </Draggable>
      )}
    </div>
  );
};

export default ThumbnailEditor;
