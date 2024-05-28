"use client";

import { useState } from "react";
import ThumbnailEditor from "./components/ThumbnailEditor/ThumbnailEditor";
import TextEditor from "./components/TextEditor/TextEditor";
import styles from "./Home.module.css";
import { Text } from "./type";
import CreateThumbnailButton from "./components/CreateThumbnailButton/CreateThumbnailButton";
import { newTextTemplate, thumbnailSizes } from "./data/initialValues";

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [texts, setTexts] = useState<Text[]>([]);
  const [additionalImage, setAdditionalImage] = useState<string | null>(null);
  const [selectedTextId, setSelectedTextId] = useState<number | null>(null);
  const [selectedAdditionalImageId, setSelectedAdditionalImageId] = useState<
    number | null
  >(null);
  const [thumbnailSize, setThumbnailSize] = useState(thumbnailSizes[0]);

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

  const updateText = (id: number, updates: Partial<Text>) => {
    setTexts((prev) =>
      prev.map((text) => (text.id === id ? { ...text, ...updates } : text))
    );
  };

  const deleteText = (id: number) => {
    setTexts((prev) => prev.filter((text) => text.id !== id));
    if (selectedTextId === id) {
      setSelectedTextId(null);
    }
  };

  const deleteAdditionalImage = () => {
    setAdditionalImage(null);
    setSelectedAdditionalImageId(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.thumbnailSection}>
        <ThumbnailEditor
          width={thumbnailSize.width}
          height={thumbnailSize.height}
          backgroundImage={backgroundImage}
          texts={texts}
          additionalImage={additionalImage}
          setSelectedTextId={setSelectedTextId}
          setSelectedAdditionalImageId={setSelectedAdditionalImageId}
          deleteText={deleteText}
          deleteAdditionalImage={deleteAdditionalImage}
        />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.controlGroup}>
          <label>배경 이미지: </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setBackgroundImage)}
          />
        </div>

        <div className={styles.controlGroup}>
          <label>추가 이미지: </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setAdditionalImage)}
          />
        </div>

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

        <button className={styles.button} onClick={addText}>
          텍스트 추가
        </button>

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
