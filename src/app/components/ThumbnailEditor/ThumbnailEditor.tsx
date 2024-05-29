/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import styles from "./ThumbnailEditor.module.css";
import MyDraggable from "../MyDraggable/MyDraggable";
import { ThumbnailEditorProps } from "@/app/type";
import { MyTextStyle } from "@/app/data/initialValues";
import ElementContainer from "../ElementContainer/ElementContainer";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

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
        <ResizableBox
          width={100}
          height={100}
          minConstraints={[50, 50]}
          maxConstraints={[300, 300]}
        >
          <div
            style={{ width: "100%", height: "100%", backgroundColor: "aqua" }}
          ></div>
        </ResizableBox>
      </div>
    </div>
  );
};

export default ThumbnailEditor;
