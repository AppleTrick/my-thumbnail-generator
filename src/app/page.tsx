"use client";

import { useState } from "react";
import ThumbnailEditor from "./components/ThumbnailEditor/ThumbnailEditor";
import TextEditor from "./components/TextEditor/TextEditor";
import styles from "./Home.module.css";
import { Text } from "./type";
import CreateThumbnailButton from "./components/CreateThumbnailButton/CreateThumbnailButton";

const thumbnailSizes = [
  { width: 150, height: 150 },
  { width: 300, height: 300 },
  { width: 400, height: 400 },
  { width: 500, height: 500 },
  { width: 600, height: 480 },
  { width: 800, height: 800 },
  { width: 800, height: 600 },
];

const fontFamilies = [
  "Roboto",
  "Lato",
  "Oswald",
  "Montserrat",
  "Raleway",
  "Open Sans",
  "Poppins",
  "Merriweather",
];

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
    const newText = {
      id: Date.now(),
      content: "New Text",
      color: "#000000",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      fontSize: "36px",
      fontFamily: "Roboto",
    };
    setTexts((prev) => [...prev, newText]);
    setSelectedTextId(newText.id);
  };

  const updateText = (id: number, updates: Partial<Text>) => {
    setTexts((prev) =>
      prev.map((text) => (text.id === id ? { ...text, ...updates } : text))
    );
  };

  // // 텍스트 내용 변경
  // const updateTextContent = (id: number, content: string) => {
  //   setTexts((prev) =>
  //     prev.map((text) => (text.id === id ? { ...text, content } : text))
  //   );
  // };

  // // 텍스트 색 변경
  // const updateTextColor = (id: number, color: string) => {
  //   setTexts((prev) =>
  //     prev.map((text) => (text.id === id ? { ...text, color } : text))
  //   );
  // };

  // // 텍스트 스타일 변경
  // const updateTextStyle = (id: number, style: Partial<Text>) => {
  //   setTexts((prev) =>
  //     prev.map((text) => (text.id === id ? { ...text, ...style } : text))
  //   );
  // };

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
          // updateTextContent={updateTextContent}
          // updateTextColor={updateTextColor}
          // updateTextStyle={updateTextStyle}
          fontFamilies={fontFamilies}
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
