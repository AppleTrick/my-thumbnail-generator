import { useRef } from "react";
import styles from "./ThumbnailEditor.module.css";
import MyDraggable from "../MyDraggable/MyDraggable";
import { ThumbnailEditorProps } from "@/app/type";
import ThumbnailContainer from "../ThumbnailContainer/ThumbnailContainer";

const ThumbnailEditor: React.FC<ThumbnailEditorProps> = ({
  width,
  height,
  backgroundImage,
  texts,
  additionalImage,
  setSelectedTextId,
  setSelectedAdditionalImageId,
  deleteText,
  deleteAdditionalImage,
}) => {
  const thumbnailRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="thumbnail"
      ref={thumbnailRef}
      className={styles.thumbnail}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {texts.map((text) => (
        <MyDraggable key={text.id}>
          <ThumbnailContainer>
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
          </ThumbnailContainer>
        </MyDraggable>
      ))}
      {additionalImage && (
        <MyDraggable>
          <ThumbnailContainer>
            <img
              src={additionalImage}
              alt=""
              className={styles.additionalImage}
            />
          </ThumbnailContainer>
        </MyDraggable>
      )}
    </div>
  );
};

export default ThumbnailEditor;
