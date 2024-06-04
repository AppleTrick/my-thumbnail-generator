```javascript
/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import styled from "styled-components";
import MyDraggable from "../MyDraggable/MyDraggable";
import { ThumbnailEditorProps } from "@/app/type";
import { MyTextStyle } from "@/app/data/initialValues";
import CloseButton from "../CloseButton/CloseButton";

const Thumbnail = styled.div<{
  width: number;
  height: number;
  backgroundImage: string | null;
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: url(${(props) => props.backgroundImage});
  display: flex;
  background-size: cover;
  justify-content: center;
  align-items: center;
  background-position: center;
  border: 1px solid #ccc;
  position: relative;
`;

const HideOverflow = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  overflow: hidden;
  position: relative;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  position: relative;

  &:hover .deleteButton {
    display: block;
  }
`;

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
    <Thumbnail
      id="thumbnail"
      ref={thumbnailRef}
      width={width}
      height={height}
      backgroundImage={backgroundImage}
    >
      <HideOverflow width={width} height={height}>
        {texts.map((text) => (
          <MyDraggable key={text.id}>
            <ThumbnailContainer>
              <span
                style={MyTextStyle(text)}
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
      </HideOverflow>
    </Thumbnail>
  );
};

export default ThumbnailEditor;
```
