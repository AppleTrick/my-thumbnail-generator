"use client";

import { useState } from "react";
import html2canvas from "html2canvas";
import ThumbnailEditor from "./components/ThumbnailEditor/ThumbnailEditor";
import TextEditor from "./components/TextEditor/TextEditor";
import styles from "./Home.module.css";

const thumbnailSizes = [
  { width: 800, height: 600 },
  { width: 1280, height: 720 },
  { width: 1024, height: 768 },
  { width: 640, height: 480 },
  { width: 1280, height: 900 },
  { width: 1366, height: 768 },
  { width: 1920, height: 1080 },
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
  const [texts, setTexts] = useState<
    {
      id: number;
      content: string;
      color: string;
      fontWeight: string;
      fontStyle: string;
      textDecoration: string;
      fontSize: string;
      fontFamily: string;
    }[]
  >([]);
  const [additionalImage, setAdditionalImage] = useState<string | null>(null);
  const [selectedTextId, setSelectedTextId] = useState<number | null>(null);
  const [thumbnailSize, setThumbnailSize] = useState(thumbnailSizes[0]);

  const handleBackgroundImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdditionalImage(reader.result as string);
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
      fontSize: "16px",
      fontFamily: "Roboto",
    };
    setTexts((prev) => [...prev, newText]);
    setSelectedTextId(newText.id);
  };

  const updateTextContent = (id: number, content: string) => {
    setTexts((prev) =>
      prev.map((text) => (text.id === id ? { ...text, content } : text))
    );
  };

  const updateTextColor = (id: number, color: string) => {
    setTexts((prev) =>
      prev.map((text) => (text.id === id ? { ...text, color } : text))
    );
  };

  const updateTextStyle = (
    id: number,
    style: Partial<{
      content: string;
      color: string;
      fontWeight: string;
      fontStyle: string;
      textDecoration: string;
      fontSize: string;
      fontFamily: string;
    }>
  ) => {
    setTexts((prev) =>
      prev.map((text) => (text.id === id ? { ...text, ...style } : text))
    );
  };

  const deleteText = (id: number) => {
    setTexts((prev) => prev.filter((text) => text.id !== id));
    if (selectedTextId === id) {
      setSelectedTextId(null);
    }
  };

  const downloadImage = async (format: "png" | "jpeg" | "jpg") => {
    const canvas = await html2canvas(
      document.getElementById("thumbnail") as HTMLElement
    );
    const dataUrl = canvas.toDataURL(`image/${format}`);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `thumbnail.${format}`;
    link.click();
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.thumbnailSection}
        style={{ width: thumbnailSize.width, height: thumbnailSize.height }}
      >
        <ThumbnailEditor
          backgroundImage={backgroundImage}
          texts={texts}
          additionalImage={additionalImage}
          setSelectedTextId={setSelectedTextId}
          deleteText={deleteText}
        />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.controlGroup}>
          <label>배경 이미지: </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleBackgroundImageChange}
          />
        </div>

        <div className={styles.controlGroup}>
          <label>추가 이미지: </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleAdditionalImageChange}
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
          updateTextContent={updateTextContent}
          updateTextColor={updateTextColor}
          updateTextStyle={updateTextStyle}
          fontFamilies={fontFamilies}
        />

        <div className={styles.controlGroup}>
          <button
            className={styles.button}
            onClick={() => downloadImage("png")}
          >
            Download as PNG
          </button>
          <button
            className={styles.button}
            onClick={() => downloadImage("jpeg")}
          >
            Download as JPEG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
