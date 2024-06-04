/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import styles from './ThumbnailEditor.module.css';
import { ThumbnailEditorProps } from '@/app/type';
import ElementContainer from '../ElementContainer/ElementContainer';
import { MyTextStyle } from '@/data/initialValues';
import { position } from 'html2canvas/dist/types/css/property-descriptors/position';
import { relative } from 'path';

const ThumbnailEditor: React.FC<ThumbnailEditorProps> = ({ width, height, backgroundImage, texts, images, setSelectedTextId, deleteText, deleteImage }) => {
  const thumbnailRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.thumbnailSection}>
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
        <div className={styles.hideOverflow} style={{ width: `${width}px`, height: `${height}px` }}>
          {texts.map((text) => (
            <ElementContainer key={text.id} deleteData={() => deleteText(text.id)}>
              <span style={{ ...MyTextStyle(text), position: 'relative' }} onClick={() => setSelectedTextId(text.id)}>
                {text.content}
              </span>
            </ElementContainer>
          ))}
          {images.map((image) => (
            <ElementContainer key={image.id} deleteData={() => deleteImage(image.id)}>
              <img src={image.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'fill', userSelect: 'none', zIndex: -1, position: 'relative' }} />
            </ElementContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailEditor;
