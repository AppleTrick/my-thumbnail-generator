import React, { RefObject, useRef } from "react";
import styles from "./myDraggable.module.css";
import { getOffset } from "@/app/utils/utils";

interface DraggableProps {
  children: React.ReactNode;
  refObject?: RefObject<HTMLDivElement>;
}

const MyDraggable: React.FC<DraggableProps> = ({ children, refObject }) => {
  const draggableRef = useRef<HTMLDivElement>(null);

  let shiftX = 0;
  let shiftY = 0;

  const onMouseMove = (e: MouseEvent) => {
    moveAt(e.pageX, e.pageY);
  };

  const moveAt = (pageX: number, pageY: number) => {
    if (refObject) {
      if (refObject?.current) {
        const offset = getOffset(refObject.current.parentElement);
        const newLeft = pageX - shiftX - offset.left;
        const newTop = pageY - shiftY - offset.top;

        refObject.current.style.left = `${newLeft}px`;
        refObject.current.style.top = `${newTop}px`;
      }
    } else {
      if (draggableRef.current) {
        const offset = getOffset(draggableRef.current.parentElement);
        const newLeft = pageX - shiftX - offset.left;
        const newTop = pageY - shiftY - offset.top;

        draggableRef.current.style.left = `${newLeft}px`;
        draggableRef.current.style.top = `${newTop}px`;
      }
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

// if(refObject){

//   let shiftX = 0;
//   let shiftY = 0;

//   const onMouseMove = (e: MouseEvent) => {
//     moveAt(e.pageX, e.pageY);
//   };

//   const moveAt = (pageX: number, pageY: number) => {
//     if (refObject.current) {
//       const offset = getOffset(refObject.current.parentElement);
//       const newLeft = pageX - shiftX - offset.left;
//       const newTop = pageY - shiftY - offset.top;

//       refObject.current.style.left = `${newLeft}px`;
//       refObject.current.style.top = `${newTop}px`;
//     }
//   };

//   const onMouseUp = () => {
//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseup", onMouseUp);
//   };

//   const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     if (refObject.current) {
//       const rect = refObject.current.getBoundingClientRect();
//       shiftX = e.clientX - rect.left;
//       shiftY = e.clientY - rect.top;
//     }
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseup", onMouseUp);
//   };
// }
