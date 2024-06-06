import { useRecoilState, useRecoilValue } from 'recoil';
import styles from './TextEditor.module.css';
import { fontFamiliesData } from '@/data/fonts';
import { selectedIdState, thumbnailObjectState } from '@/common/store';
import { Text, TextOrSrcImage } from '@/app/type';

const TextEditor = () => {
  // texts : 전체 텍스트 값
  // selectedTextId : 선택한 텍스트 값의 id
  // updateText : setTexts 가 들어있는 함수

  const selectId = useRecoilValue(selectedIdState);
  const [thumbnailObject, setThumbnailObject] = useRecoilState(thumbnailObjectState);
  const selectedObject = thumbnailObject.find((object) => object.id === selectId);

  const updateObject = (id: number, updateData: Partial<Text>) => {
    setThumbnailObject((prev) => prev.map((object) => (object.id === id ? { ...object, ...updateData } : object)));
  };

  const fontFamilies = ['inter', 'roboto', 'lato', 'oswald', 'montserrat', 'openSans', 'raleway', 'poppins', 'merriweather', 'jua'];

  const isText = (object: TextOrSrcImage): object is Text => {
    return (object as Text).content !== undefined;
  };

  if (!selectedObject || !isText(selectedObject)) {
    return null;
  }

  return selectId ? (
    <div className={styles.textEditor}>
      <label>텍스트 내용: </label>
      <input type="text" value={selectedObject?.content || ''} onChange={(e) => updateObject(selectId, { content: e.target.value })} />
      <label>텍스트 색상: </label>
      <input type="color" value={selectedObject?.color || '#000000'} onChange={(e) => updateObject(selectId, { color: e.target.value })} />

      <label>폰트: </label>
      <select value={selectedObject?.fontFamily} onChange={(e) => updateObject(selectId, { fontFamily: e.target.value })}>
        {fontFamiliesData.map((font, index) => (
          <option value={font} key={index}>
            {fontFamilies[index]}
          </option>
        ))}
      </select>

      <label>글씨 크기: </label>
      <input type="number" value={parseInt(selectedObject?.fontSize || '16')} onChange={(e) => updateObject(selectId, { fontSize: `${e.target.value}px` })} />
      <div>
        <button
          onClick={() =>
            updateObject(selectId, {
              fontWeight: selectedObject?.fontWeight === 'bold' ? 'normal' : 'bold',
            })
          }
        >
          굵게
        </button>

        <button
          onClick={() =>
            updateObject(selectId, {
              fontStyle: selectedObject?.fontStyle === 'italic' ? 'normal' : 'italic',
            })
          }
        >
          기울임
        </button>
        <button
          onClick={() =>
            updateObject(selectId, {
              textDecoration: selectedObject?.textDecoration === 'underline' ? 'none' : 'underline',
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
