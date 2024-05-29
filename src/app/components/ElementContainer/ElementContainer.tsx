import { useState } from "react";
import styles from "./elementContainer.module.css";
import CloseButton from "../CloseButton/CloseButton";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

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
    >
      <ResizableBox
        width={100}
        height={100}
        minConstraints={[50, 50]}
        maxConstraints={[300, 300]}
      >
        {children}
      </ResizableBox>
      {showState && <CloseButton deleteData={deleteData} />}
    </div>
  );
};

export default ElementContainer;
