"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import ThumbnailEditor from "./components/ThumbnailEditor/ThumbnailEditor";
import TextEditor from "./components/TextEditor/TextEditor";
import styles from "./Home.module.css";
import { Text, SrcImage } from "./type";
import CreateThumbnailButton from "./components/CreateThumbnailButton/CreateThumbnailButton";
import { newTextTemplate, thumbnailSizes } from "./data/initialValues";
import { triggerFileInputClick } from "./utils/utils";

const Home = () => {
  // 초기값 설정하는 usestate
  const [thumbnailSize, setThumbnailSize] = useState(thumbnailSizes[0]);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [texts, setTexts] = useState<Text[]>([]);
  const [images, setImages] = useState<SrcImage[]>([]);

  // 추가할 이미지를 잠시 저장해둘 state
  const [basicImage, setBasicImage] = useState<string | null>("");

  // 값 변경에 영향을 미치는 useState
  const [selectedTextId, setSelectedTextId] = useState<number | null>(null);
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  // 파일입력 요소
  const fileInputRef = useRef<HTMLInputElement>(null);
  const BackgroundInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: (image: string | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addText = () => {
    const newText = { ...newTextTemplate, id: Date.now() };
    setTexts((prev) => [...prev, newText]);
    setSelectedTextId(newText.id);
  };

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
    setTexts((prev) =>
      prev.map((text) => (text.id === id ? { ...text, ...updates } : text))
    );
  };

  const updateImage = (id: number) => {};

  const deleteText = (id: number) => {
    setTexts((prev) => prev.filter((text) => text.id !== id));
    if (selectedTextId === id) {
      setSelectedTextId(null);
    }
  };

  const deleteImage = (id: number) => {
    setImages((prev) => prev.filter((text) => text.id !== id));
    if (selectedImageId === id) {
      setSelectedImageId(null);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.thumbnailSection}>
        <ThumbnailEditor
          width={thumbnailSize.width}
          height={thumbnailSize.height}
          backgroundImage={backgroundImage}
          texts={texts}
          images={images}
          setSelectedTextId={setSelectedTextId}
          deleteText={deleteText}
        />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.controlGroup}>
          <label>썸네일 크기: </label>
          <select
            onChange={(e) =>
              setThumbnailSize(thumbnailSizes[parseInt(e.target.value, 10)])
            }
          >
            {thumbnailSizes.map((size, index) => (
              <option value={index} key={index}>
                {size.width} x {size.height}
              </option>
            ))}
          </select>
        </div>

        <button
          className={styles.button}
          onClick={() => triggerFileInputClick(BackgroundInputRef)}
        >
          배경추가하기
        </button>
        <input
          type="file"
          accept="image/*"
          ref={BackgroundInputRef}
          style={{ display: "none" }}
          onChange={(e) => handleImageChange(e, setBackgroundImage)}
        />

        <button className={styles.button} onClick={addText}>
          텍스트 추가하기
        </button>

        <button
          className={styles.button}
          onClick={() => triggerFileInputClick(fileInputRef)}
        >
          이미지 추가하기
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => handleImageChange(e, setBasicImage)}
        />

        <TextEditor
          selectedTextId={selectedTextId}
          texts={texts}
          updateText={updateText}
        />

        <div className={styles.controlGroup}>
          <CreateThumbnailButton createType={"png"} />
          <CreateThumbnailButton createType={"jpg"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
