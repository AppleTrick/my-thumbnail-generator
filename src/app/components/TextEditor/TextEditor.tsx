import { TextEditorProps } from '@/app/type';
import styles from './TextEditor.module.css';
import { fontFamiliesData } from '@/app/data/fonts';

const TextEditor: React.FC<TextEditorProps> = ({ selectedTextId, texts, updateText }) => {
  // texts : 전체 텍스트 값
  // selectedTextId : 선택한 텍스트 값의 id
  // updateText : setTexts 가 들어있는 함수

  const selectedText = texts.find((text) => text.id === selectedTextId);

  const fontFamilies = ['inter', 'roboto', 'lato', 'oswald', 'montserrat', 'openSans', 'raleway', 'poppins', 'merriweather', 'jua'];

  return selectedTextId ? (
    <div className={styles.textEditor}>
      <label>텍스트 내용: </label>
      <input type="text" value={selectedText?.content || ''} onChange={(e) => updateText(selectedTextId, { content: e.target.value })} />

      <label>텍스트 색상: </label>
      <input type="color" value={selectedText?.color || '#000000'} onChange={(e) => updateText(selectedTextId, { color: e.target.value })} />

      <label>폰트: </label>
      <select value={selectedText?.fontFamily} onChange={(e) => updateText(selectedTextId, { fontFamily: e.target.value })}>
        {fontFamiliesData.map((font, index) => (
          <option value={font} key={index}>
            {fontFamilies[index]}
          </option>
        ))}
      </select>

      <label>글씨 크기: </label>
      <input type="number" value={parseInt(selectedText?.fontSize || '16')} onChange={(e) => updateText(selectedTextId, { fontSize: `${e.target.value}px` })} />
      <div>
        <button
          onClick={() =>
            updateText(selectedTextId, {
              fontWeight: selectedText?.fontWeight === 'bold' ? 'normal' : 'bold',
            })
          }
        >
          굵게
        </button>

        <button
          onClick={() =>
            updateText(selectedTextId, {
              fontStyle: selectedText?.fontStyle === 'italic' ? 'normal' : 'italic',
            })
          }
        >
          기울임
        </button>
        <button
          onClick={() =>
            updateText(selectedTextId, {
              textDecoration: selectedText?.textDecoration === 'underline' ? 'none' : 'underline',
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
