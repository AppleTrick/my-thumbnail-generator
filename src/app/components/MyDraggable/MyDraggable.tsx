import React, { useRef } from "react";
import styles from "./myDraggable.module.css";

interface DraggableProps {
  children: React.ReactNode;
}

const MyDraggable: React.FC<DraggableProps> = ({ children }) => {
  const draggableRef = useRef<HTMLDivElement>(null);

  let shiftX = 0;
  let shiftY = 0;

  const onMouseMove = (e: MouseEvent) => {
    moveAt(e.pageX, e.pageY);
  };

  const moveAt = (pageX: number, pageY: number) => {
    if (draggableRef.current) {
      draggableRef.current.style.left = `${pageX - shiftX}px`;
      draggableRef.current.style.top = `${pageY - shiftY}px`;
    }
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (draggableRef.current) {
      const rect = draggableRef.current.getBoundingClientRect();
      shiftX = e.clientX - rect.left;
      shiftY = e.clientY - rect.top;
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      ref={draggableRef}
      onMouseDown={onMouseDown}
      className={styles.draggable}
    >
      {children}
    </div>
  );
};

export default MyDraggable;
