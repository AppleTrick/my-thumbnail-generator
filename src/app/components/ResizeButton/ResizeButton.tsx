import { RefObject } from 'react';
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

  const onMouseMove = (e: MouseEvent) => {
    resize(e.pageX, e.pageY);
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseDown = () => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return <div className={styles.resize_button} onMouseDown={onMouseDown}></div>;
};

export default ResizeButton;
