"use client";

import { useState } from "react";
import html2canvas from "html2canvas";
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

  const updateTextStyle = (id: number, style: Partial<Text>) => {
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

  const deleteAdditionalImage = () => {
    setAdditionalImage(null);
    setSelectedAdditionalImageId(null);
  };

  // const downloadImage = async (format: "png" | "jpeg" | "jpg") => {
  //   const thumbnailElement = document.getElementById(
  //     "thumbnail"
  //   ) as HTMLElement;

  //   const deleteButtons = thumbnailElement.querySelectorAll(
  //     ".deleteButton"
  //   ) as NodeListOf<HTMLElement>;
  //   deleteButtons.forEach((button) => (button.style.display = "none"));

  //   const canvas = await html2canvas(thumbnailElement);
  //   const dataUrl = canvas.toDataURL(`image/${format}`);
  //   const link = document.createElement("a");
  //   link.href = dataUrl;
  //   link.download = `thumbnail.${format}`;
  //   link.click();

  //   deleteButtons.forEach((button) => (button.style.display = "block"));
  // };

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
          <CreateThumbnailButton createType={"png"} />
          <CreateThumbnailButton createType={"jpg"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
