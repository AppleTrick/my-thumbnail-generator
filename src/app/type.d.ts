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
  zIdex?: number;
}
export interface SrcImage {
  id: number;
  src: string;
  zIdex?: number;
}
export type TextOrSrcImage = Text | SrcImage;
export type TextOrSrcImageArray = TextOrSrcImage[];
