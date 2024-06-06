export interface Text {
  id: number;
  content: string;
  color: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  fontSize: string;
  fontFamily: string;
  // zIdex: number;
}
export interface SrcImage {
  id: number;
  src: string;
  // zIdex: number;
}
export type TextOrSrcImage = Text | SrcImage;
export type TextOrSrcImageArray = TextOrSrcImage[];

// export interface ThumbnailEditorProps {
//   width: number;
//   height: number;
//   backgroundImage: string | null;
//   texts: Text[];
//   images: SrcImage[];
//   setSelectedTextId: (id: number | null) => void;
//   deleteText: (id: number) => void;
//   deleteImage: (id: number) => void;
// }

// export interface TextEditorProps {
//   selectedTextId: number | null;
//   texts: Text[];
//   updateText: (id: number, updates: Partial<Text>) => void;
// }
