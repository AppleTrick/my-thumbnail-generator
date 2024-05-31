import { useRef, useState } from "react";
import styles from "./elementContainer.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";
import ResizeButton from "../ResizeButton/ResizeButton";
import Draggable from "../Draggable/Draggable";

interface ElementContainerProps {
  children: React.ReactNode;
  deleteData: () => void;
}

const ElementContainer: React.FC<ElementContainerProps> = ({
  children,
  deleteData,
}) => {
  // resize 구현
  const resizableRef = useRef<HTMLDivElement>(null);
  // draggable
  const draggalbeRef = useRef<HTMLDivElement>(null);

  // 마우스 hover를 자바스크립트로 구현하여 조건부 렌더링
  const [showState, SetShowState] = useState(false);
  const onMouseOver = () => SetShowState(true);
  // const onMouseOut = () => SetShowState(false);
  const onMouseLeave = () => SetShowState(false);

  return (
    <div
      className={styles.container}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      ref={draggalbeRef} // draggalbeRef로 해당 요소를 조절함
    >
      <div className={styles.dataContainer} ref={resizableRef}>
        <Draggable refObject={draggalbeRef}>{children}</Draggable>
      </div>

      <div className={styles.buttonContainer}>
        <DeleteButton deleteData={deleteData} />
        <ResizeButton resizableRef={resizableRef} />
      </div>
    </div>
  );
};

export default ElementContainer;
