import React, { useState, useRef, useCallback } from "react";
import styles from "./resizabe.module.css";

interface ResizableProps {
  children: React.ReactNode;
}

// const getInitialDimensions = (naturalWidth: number, naturalHeight: number) => {
//   const maxWidth = 1200;
//   if (naturalWidth <= maxWidth) {
//     return { width: naturalWidth, height: naturalHeight };
//   }
//   const ratio = maxWidth / naturalWidth;
//   return { width: maxWidth, height: naturalHeight * ratio };
// };

const Resizable: React.FC<ResizableProps> = ({ children }) => {
  const resizableRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isResizing && resizableRef.current) {
        const newWidth =
          e.clientX - resizableRef.current.getBoundingClientRect().left;
        const newHeight =
          e.clientY - resizableRef.current.getBoundingClientRect().top;
      }
    },
    [isResizing]
  );

  return (
    <div
      ref={resizableRef}
      className={styles.resize_container}
      onMouseMove={resize}
      onMouseUp={stopResizing}
      onMouseLeave={stopResizing}
    >
      {children}
    </div>
  );
};

export default Resizable;
