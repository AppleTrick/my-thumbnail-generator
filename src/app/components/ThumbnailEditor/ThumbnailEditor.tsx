/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import styles from "./ThumbnailEditor.module.css";
import MyDraggable from "../MyDraggable/MyDraggable";
import { ThumbnailEditorProps } from "@/app/type";
import ThumbnailContainer from "../ThumbnailContainer/ThumbnailContainer";
import CloseButton from "../CloseButton/CloseButton";

const ThumbnailEditor: React.FC<ThumbnailEditorProps> = ({
  width,
  height,
  backgroundImage,
  texts,
  images,
  setSelectedTextId,
  deleteText,
  deleteImage,
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
      <div
        className={styles.hideOverflow}
        style={{ width: `${width}px`, height: `${height}px` }}
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
              <CloseButton deleteData={() => deleteText(text.id)} />
            </ThumbnailContainer>
          </MyDraggable>
        ))}
        {images.map((image) => (
          <MyDraggable key={image.id}>
            <ThumbnailContainer>
              <img src={image.src} alt="" />
              <CloseButton deleteData={() => deleteImage(image.id)} />
            </ThumbnailContainer>
          </MyDraggable>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailEditor;
