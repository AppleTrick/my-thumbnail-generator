import { MouseEvent as ReactMouseEvent, RefObject, useCallback } from 'react';
import styles from './resizeButton.module.css';

interface ResizeButtonProps {
  resizableRef: RefObject<HTMLDivElement>;
}

const ResizeButton = ({ resizableRef }: ResizeButtonProps) => {
  const resize = (pageX: number, pageY: number) => {
    if (resizableRef.current) {
      const rect = resizableRef.current.getBoundingClientRect();
      const newWidth = pageX - rect.left;
      const newHeight = pageY - rect.top;
      resizableRef.current.style.width = `${newWidth}px`;
      resizableRef.current.style.height = `${newHeight}px`;
    }
  };

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      resize(e.pageX, e.pageY);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [resizableRef],
  );

  const onMouseUp = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    },
    [onMouseMove],
  );

  const onMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return <div className={styles.resize_button} onMouseDown={onMouseDown}></div>;
};

export default ResizeButton;
