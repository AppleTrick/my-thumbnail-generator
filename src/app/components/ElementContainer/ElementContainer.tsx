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

  return (
    <MyDraggable>
      <div
        className={styles.container}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <div ref={resizableRef}>{children}</div>

        {showState && <CloseButton deleteData={deleteData} />}
        {showState && <ResizeButton resizableRef={resizableRef} />}
      </div>
    </MyDraggable>
  );
};

export default ElementContainer;
