import { useState } from "react";
import styles from "./elementContainer.module.css";
import CloseButton from "../CloseButton/CloseButton";
import ResizeButton from "../ResizeButton/ResizeButton";

interface ElementContainerProps {
  children: React.ReactNode;
  deleteData: () => void;
}

const ElementContainer: React.FC<ElementContainerProps> = ({
  children,
  deleteData,
}) => {
  const [showState, SetShowState] = useState(false);
  const onMouseOver = () => SetShowState(true);
  const onMouseOut = () => SetShowState(false);

  return (
    <div
      className={styles.container}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      style={{ width: "100px", height: "100px" }}
    >
      {children}
      {showState && <CloseButton deleteData={deleteData} />}
      {showState && <ResizeButton />}
    </div>
  );
};

export default ElementContainer;
