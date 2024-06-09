/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import styles from './ThumbnailEditor.module.css';
import ElementContainer from '../ElementContainer/ElementContainer';
import { NewTextStyle } from '@/data/initialValues';
import { useRecoilState, useRecoilValue } from 'recoil';
import { backgroundImageState, selectedIdState, thumbnailObjectState, thumbnailSizeState } from '@/common/store';
import { SrcImage, TextOrSrcImage } from '@/app/type';

const ThumbnailEditor = () => {
  const thumbnailObject = useRecoilValue(thumbnailObjectState);
  const backgroundImage = useRecoilValue(backgroundImageState);
  const thumbnailSize = useRecoilValue(thumbnailSizeState);
  const [selectedId, setselectedId] = useRecoilState(selectedIdState);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const isTextOrImage = (object: TextOrSrcImage): object is SrcImage => {
    return (object as SrcImage).src !== undefined;
  };

  return (
    <div className={styles.thumbnailSection}>
      <div
        id="thumbnail"
        ref={thumbnailRef}
        className={styles.thumbnail}
        style={{
          width: `${thumbnailSize.width}px`,
          height: `${thumbnailSize.height}px`,
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className={styles.hideOverflow} style={{ width: `${thumbnailSize.width}px`, height: `${thumbnailSize.height}px` }}>
          {thumbnailObject.map((object) => (
            <ElementContainer key={object.id} id={object.id}>
              {isTextOrImage(object) ? (
                <img
                  src={object.src}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'fill', userSelect: 'none', zIndex: object.zIndex, position: 'relative' }}
                  onClick={() => setselectedId(object.id)}
                />
              ) : (
                <span style={{ ...NewTextStyle(object), position: 'relative' }} onClick={() => setselectedId(object.id)}>
                  {object.content}
                </span>
              )}
            </ElementContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailEditor;
