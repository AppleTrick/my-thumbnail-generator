import { Text } from "../type";

export const thumbnailSizes = [
  { width: 1280, height: 720 },
  { width: 300, height: 300 },
  { width: 400, height: 400 },
  { width: 500, height: 500 },
  { width: 600, height: 480 },
  { width: 800, height: 800 },
  { width: 800, height: 600 },
];

// export const fontFamilies = [
//   "Roboto",
//   "Lato",
//   "Oswald",
//   "Montserrat",
//   "Raleway",
//   "Open Sans",
//   "Poppins",
//   "Merriweather",
//   "NanumGothic",
//   "DoHyeon",
// ];

export const fontFamilies = ["Jua", "DoHyeon"];

export const newTextTemplate = {
  id: Date.now(),
  content: "New Text",
  color: "#000000",
  fontWeight: "normal",
  fontStyle: "normal",
  textDecoration: "none",
  fontSize: "36px",
  fontFamily: "Jua",
};

export const MyTextStyle = (text: Text) => {
  return {
    color: text.color,
    fontWeight: text.fontWeight,
    fontStyle: text.fontStyle,
    textDecoration: text.textDecoration,
    fontSize: text.fontSize,
    fontFamily: text.fontFamily,
  };
};
