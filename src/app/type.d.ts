export interface Text {
  id: number;
  content: string;
  color: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  fontSize: string;
  fontFamily: string;
  userSelect?: string;
  zIndex: number;
}
export interface SrcImage {
  id: number;
  src: string;
  zIndex: number;
}
export type TextOrSrcImage = Text | SrcImage;
export type TextOrSrcImageArray = TextOrSrcImage[];
