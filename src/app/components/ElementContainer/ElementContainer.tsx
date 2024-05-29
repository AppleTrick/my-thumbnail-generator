import { ReactNode, useState } from "react";
import styles from "./elementContainer.module.css";
import CloseButton from "../CloseButton/CloseButton";

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
      {children}
      {showState && <CloseButton deleteData={deleteData} />}
    </div>
  );
};

export default ElementContainer;
