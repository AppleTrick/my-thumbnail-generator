// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import ThumbnailEditor from '../components/ThumbnailEditor/ThumbnailEditor';
// import styles from './Home.module.css';
// import { Text, SrcImage } from './type';
// import { newTextTemplate, thumbnailSizes } from '@/data/initialValues';
// import SideBar from '@/components/SideBar/SideBar';

// const Home = () => {
//   // 초기값 설정하는 usestate
//   const [thumbnailSize, setThumbnailSize] = useState(thumbnailSizes[0]);
//   const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
//   const [texts, setTexts] = useState<Text[]>([]);
//   const [images, setImages] = useState<SrcImage[]>([]);

//   // 추가할 이미지를 잠시 저장해둘 state
//   const [basicImage, setBasicImage] = useState<string | null>('');

//   // 값 변경에 영향을 미치는 useState
//   const [selectedTextId, setSelectedTextId] = useState<number | null>(null);
//   const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

//   // 파일입력 요소
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const BackgroundInputRef = useRef<HTMLInputElement>(null);

//   const addImage = (e: React.ChangeEvent<HTMLInputElement>, setImage: (image: string | null) => void) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const addText = () => {
//     const newText = { ...newTextTemplate, id: Date.now() };
//     setTexts((prev) => [...prev, newText]);
//     setSelectedTextId(newText.id);
//   };

//   // 잠시 저장해둘 image가 추가되면 Images에 데이터를 추가
//   // 데이터의 형식은 {id, src} 형태로 저장
//   useEffect(() => {
//     if (basicImage) {
//       const newImage = {
//         id: Date.now(),
//         src: basicImage,
//       };
//       setImages((prev) => [...prev, newImage]);
//       setSelectedImageId(newImage.id);
//     }
//   }, [basicImage]);

//   const updateText = (id: number, updates: Partial<Text>) => {
//     setTexts((prev) => prev.map((text) => (text.id === id ? { ...text, ...updates } : text)));
//   };

//   const updateImage = (id: number) => {};

//   const deleteText = (id: number) => {
//     setTexts((prev) => prev.filter((text) => text.id !== id));
//     if (selectedTextId === id) {
//       setSelectedTextId(null);
//     }
//   };

//   const deleteImage = (id: number) => {
//     setImages((prev) => prev.filter((image) => image.id !== id));
//     if (selectedImageId === id) {
//       setSelectedImageId(null);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <ThumbnailEditor
//         width={thumbnailSize.width}
//         height={thumbnailSize.height}
//         backgroundImage={backgroundImage}
//         texts={texts}
//         images={images}
//         setSelectedTextId={setSelectedTextId}
//         deleteText={deleteText}
//         deleteImage={deleteImage}
//       />
//       <SideBar
//         BackgroundInputRef={BackgroundInputRef}
//         fileInputRef={fileInputRef}
//         addText={addText}
//         addImage={addImage}
//         selectedTextId={selectedTextId}
//         texts={texts}
//         updateText={updateText}
//         setBackgroundImage={setBackgroundImage}
//         setBasicImage={setBasicImage}
//         setThumbnailSize={setThumbnailSize}
//       />
//     </div>
//   );
// };

// export default Home;

'use client';

import { useEffect, useRef, useState } from 'react';
import ThumbnailEditor from '../components/ThumbnailEditor/ThumbnailEditor';
import styles from './Home.module.css';
import { Text } from './type';
import { newTextTemplate } from '@/data/initialValues';
import SideBar from '@/components/SideBar/SideBar';
import { useRecoilState } from 'recoil';
import { backgroundImageState, thumbnailObjectState, thumbnailSizeState } from '@/common/store';

const Home = () => {
  // 초기값 설정하는 usestate
  const [thumbnailObject, setThumbnailObject] = useRecoilState(thumbnailObjectState);
  const [backgroundImage, setBackgroundImage] = useRecoilState(backgroundImageState);
  const [thumbnailSize, setThumbnailSize] = useRecoilState(thumbnailSizeState);

  // 추가할 이미지를 잠시 저장해둘 state
  const [basicImage, setBasicImage] = useState<string | null>('');

  // 값 변경에 영향을 미치는 useState
  const [selectedTextId, setSelectedTextId] = useState<number | null>(null);
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  // 파일입력 요소
  const fileInputRef = useRef<HTMLInputElement>(null);
  const BackgroundInputRef = useRef<HTMLInputElement>(null);

  const addText = () => {
    const newText = { ...newTextTemplate, id: Date.now() };
    setTexts((prev) => [...prev, newText]);
    setSelectedTextId(newText.id);
  };

  // 잠시 저장해둘 image가 추가되면 Images에 데이터를 추가
  // 데이터의 형식은 {id, src} 형태로 저장
  useEffect(() => {
    if (basicImage) {
      const newImage = {
        id: Date.now(),
        src: basicImage,
      };
      setImages((prev) => [...prev, newImage]);
      setSelectedImageId(newImage.id);
    }
  }, [basicImage]);

  const updateText = (id: number, updates: Partial<Text>) => {
    setTexts((prev) => prev.map((text) => (text.id === id ? { ...text, ...updates } : text)));
  };

  const updateImage = (id: number) => {};

  const deleteText = (id: number) => {
    setTexts((prev) => prev.filter((text) => text.id !== id));
    if (selectedTextId === id) {
      setSelectedTextId(null);
    }
  };

  const deleteImage = (id: number) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
    if (selectedImageId === id) {
      setSelectedImageId(null);
    }
  };

  return (
    <div className={styles.container}>
      <ThumbnailEditor
        width={thumbnailSize.width}
        height={thumbnailSize.height}
        backgroundImage={backgroundImage}
        texts={texts}
        images={images}
        setSelectedTextId={setSelectedTextId}
        deleteText={deleteText}
        deleteImage={deleteImage}
      />
      <SideBar
        BackgroundInputRef={BackgroundInputRef}
        fileInputRef={fileInputRef}
        addText={addText}
        selectedTextId={selectedTextId}
        texts={texts}
        updateText={updateText}
        setBackgroundImage={setBackgroundImage}
        setBasicImage={setBasicImage}
        setThumbnailSize={setThumbnailSize}
      />
    </div>
  );
};

export default Home;
