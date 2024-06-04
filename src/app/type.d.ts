export interface Text {
  id: number;
  content: string;
  color: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  fontSize: string;
  fontFamily: string;
}

export interface SrcImage {
  id: number;
  src: string;
}

export interface ThumbnailEditorProps {
  width: number;
  height: number;
  backgroundImage: string | null;
  texts: Text[];
  images: SrcImage[];
  setSelectedTextId: (id: number | null) => void;
  deleteText: (id: number) => void;
  deleteImage: (id: number) => void;
}

export interface TextEditorProps {
  selectedTextId: number | null;
  texts: Text[];
  updateText: (id: number, updates: Partial<Text>) => void;
}
