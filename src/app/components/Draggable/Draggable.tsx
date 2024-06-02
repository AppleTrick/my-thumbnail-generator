import React, { RefObject, useRef } from "react";
import styles from "./draggable.module.css";
import { getOffset } from "@/app/utils/utils";

interface DraggableProps {
  children: React.ReactNode;
  refObject?: RefObject<HTMLDivElement>;
}

const Draggable: React.FC<DraggableProps> = ({ children, refObject }) => {
  const draggableRef = useRef<HTMLDivElement>(null);

  let shiftX = 0;
  let shiftY = 0;

  const onMouseMove = (e: MouseEvent) => {
    moveAt(e.pageX, e.pageY);
  };

  // const moveAt = (pageX: number, pageY: number) => {
  //   // 상위요소를 움직일 경우
  //   if (refObject) {
  //     if (refObject?.current) {
  //       const offset = getOffset(refObject.current.parentElement);
  //       const newLeft = pageX - shiftX - offset.left;
  //       const newTop = pageY - shiftY - offset.top;

  //       refObject.current.style.left = `${newLeft}px`;
  //       refObject.current.style.top = `${newTop}px`;
  //     }
  //   } else {
  //     if (draggableRef.current) {
  //       const offset = getOffset(draggableRef.current.parentElement);
  //       const newLeft = pageX - shiftX - offset.left;
  //       const newTop = pageY - shiftY - offset.top;

  //       draggableRef.current.style.left = `${newLeft}px`;
  //       draggableRef.current.style.top = `${newTop}px`;
  //     }
  //   }
  // };

  const moveAt = (pageX: number, pageY: number) => {
    const targetRef = refObject?.current || draggableRef.current;
    if (targetRef) {
      const offset = getOffset(targetRef.parentElement);
      const newLeft = pageX - shiftX - offset.left;
      const newTop = pageY - shiftY - offset.top;
      targetRef.style.left = `${newLeft}px`;
      targetRef.style.top = `${newTop}px`;
    }
  };

  const onMouseUp = () => {
    // 이벤트 제거
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // 마우스와 오브젝트간의 간격차이를 계산함
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
      className={styles.draggable_div}
    >
      {children}
    </div>
  );
};

export default Draggable;
