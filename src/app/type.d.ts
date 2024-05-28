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

export interface ThumbnailEditorProps {
  width: number;
  height: number;

  backgroundImage: string | null;
  texts: Text[];
  additionalImage: string | null;
  setSelectedTextId: (id: number | null) => void;
  setSelectedAdditionalImageId: (id: number | null) => void;
  deleteText: (id: number) => void;
  deleteAdditionalImage: () => void;
}

export interface TextEditorProps {
  selectedTextId: number | null;
  texts: {
    id: number;
    content: string;
    color: string;
    fontWeight: string;
    fontStyle: string;
    textDecoration: string;
    fontSize: string;
    fontFamily: string;
  }[];
  updateText: (id: number, updates: Partial<Text>) => void;
}
