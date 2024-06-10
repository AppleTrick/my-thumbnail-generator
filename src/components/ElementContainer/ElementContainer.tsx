import { useRef } from 'react';
import styles from './elementContainer.module.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import ResizeButton from '../ResizeButton/ResizeButton';
import Draggable from '../Draggable/Draggable';

interface ElementContainerProps {
  children: React.ReactNode;
  id: number;
  zIndex: number;
}

const ElementContainer: React.FC<ElementContainerProps> = ({ children, id, zIndex }) => {
  // resize 구현
  const resizableRef = useRef<HTMLDivElement>(null);
  // draggable
  const draggableRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles.container}
      ref={draggableRef} // draggableRef로 해당 요소를 조절함
    >
      <div className={styles.dataContainer} ref={resizableRef}>
        <Draggable refObject={draggableRef}>{children}</Draggable>
      </div>

      <div className={styles.buttonContainer}>
        <DeleteButton id={id} zIndex={zIndex} />
        <ResizeButton resizableRef={resizableRef} zIndex={zIndex} />
      </div>
    </div>
  );
};

export default ElementContainer;
