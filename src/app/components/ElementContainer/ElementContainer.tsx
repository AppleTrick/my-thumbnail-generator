import { useRef, useState } from "react";
import styles from "./elementContainer.module.css";
import CloseButton from "../CloseButton/CloseButton";
import ResizeButton from "../ResizeButton/ResizeButton";
import MyDraggable from "../MyDraggable/MyDraggable";

interface ElementContainerProps {
  children: React.ReactNode;
  deleteData: () => void;
}

const ElementContainer: React.FC<ElementContainerProps> = ({
  children,
  deleteData,
}) => {
  // 마우스 hover를 자바스크립트로 구현하여 조건부 렌더링
  const [showState, SetShowState] = useState(false);
  const onMouseOver = () => SetShowState(true);
  const onMouseOut = () => SetShowState(false);

  // resize 구현
  const resizableRef = useRef<HTMLDivElement>(null);

  // draggable

  const draggalbeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles.container}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      ref={draggalbeRef}
    >
      <div ref={resizableRef}>
        <MyDraggable refObject={draggalbeRef}>{children}</MyDraggable>
      </div>
      <div>
        {<CloseButton deleteData={deleteData} />}
        {<ResizeButton resizableRef={resizableRef} />}
      </div>
    </div>
  );
};

export default ElementContainer;
