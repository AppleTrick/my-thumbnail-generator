import { TextEditorProps } from "@/app/type";
import styles from "./TextEditor.module.css";

const TextEditor: React.FC<TextEditorProps> = ({
  selectedTextId,
  texts,
  updateTextContent,
  updateTextColor,
  updateTextStyle,
  fontFamilies,
}) => {
  const selectedText = texts.find((text) => text.id === selectedTextId);

  return selectedTextId ? (
    <div className={styles.textEditor}>
      <label>텍스트 내용: </label>
      <input
        type="text"
        value={selectedText?.content || ""}
        onChange={(e) => updateTextContent(selectedTextId, e.target.value)}
      />
      <label>텍스트 색상: </label>
      <input
        type="color"
        value={selectedText?.color || "#000000"}
        onChange={(e) => updateTextColor(selectedTextId, e.target.value)}
      />
      <label>글꼴: </label>
      <select
        value={selectedText?.fontFamily}
        onChange={(e) =>
          updateTextStyle(selectedTextId, { fontFamily: e.target.value })
        }
      >
        {fontFamilies.map((font, index) => (
          <option value={font} key={index}>
            {font}
          </option>
        ))}
      </select>
      <label>글씨 크기: </label>
      <input
        type="number"
        value={parseInt(selectedText?.fontSize || "16")}
        onChange={(e) =>
          updateTextStyle(selectedTextId, { fontSize: `${e.target.value}px` })
        }
      />
      <div>
        <button
          onClick={() =>
            updateTextStyle(selectedTextId, {
              fontWeight:
                selectedText?.fontWeight === "bold" ? "normal" : "bold",
            })
          }
        >
          굵게
        </button>
        <button
          onClick={() =>
            updateTextStyle(selectedTextId, {
              fontStyle:
                selectedText?.fontStyle === "italic" ? "normal" : "italic",
            })
          }
        >
          기울임
        </button>
        <button
          onClick={() =>
            updateTextStyle(selectedTextId, {
              textDecoration:
                selectedText?.textDecoration === "underline"
                  ? "none"
                  : "underline",
            })
          }
        >
          밑줄
        </button>
      </div>
    </div>
  ) : null;
};

export default TextEditor;
