import { RefObject } from 'react';
import styles from './resizeButton.module.css';

interface ResizeButtonProps {
  resizableRef: RefObject<HTMLDivElement>;
  zIndex: number;
}

const ResizeButton = ({ resizableRef, zIndex }: ResizeButtonProps) => {
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
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseDown = () => {
    console.log('클릭');
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return <div className={styles.resize_button} style={{ zIndex: zIndex }} onMouseDown={onMouseDown}></div>;
};

export default ResizeButton;
