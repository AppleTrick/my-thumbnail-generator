/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import styles from "./ThumbnailEditor.module.css";
import { ThumbnailEditorProps } from "@/app/type";
import { MyTextStyle } from "@/app/data/initialValues";
import MyDraggable from "../MyDraggable/MyDraggable";
import ElementContainer from "../ElementContainer/ElementContainer";
import Resizable from "../Resizable/Resizable";

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
            <ElementContainer deleteData={() => deleteText(text.id)}>
              <span
                style={MyTextStyle(text)}
                onClick={() => setSelectedTextId(text.id)}
              >
                {text.content}
              </span>
            </ElementContainer>
          </MyDraggable>
        ))}
        {images.map((image) => (
          <MyDraggable key={image.id}>
            <ElementContainer deleteData={() => deleteImage(image.id)}>
              <img
                src={image.src}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </ElementContainer>
          </MyDraggable>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailEditor;
