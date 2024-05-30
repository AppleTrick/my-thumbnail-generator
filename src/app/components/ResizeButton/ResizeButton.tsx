// import { RefObject, useCallback, useState } from "react";
// import styles from "./resizeButton.module.css";

// interface ResizeButtonProps {
//   resizableRef: RefObject<HTMLDivElement>;
// }

// const ResizeButton = ({ resizableRef }: ResizeButtonProps) => {
//   const [isResizing, setIsResizing] = useState(false);
//   console.log(resizableRef);

//   // 리사이징 시작
//   const startResizing = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setIsResizing(true);
//   }, []);

//   // 리사이즈 정지
//   const stopResizing = useCallback(() => {
//     setIsResizing(false);
//   }, []);

//   const resize = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (isResizing) {
//       console.log(e.clientX, e.clientY);
//     }
//   };

//   return (
//     <div
//       className={styles.resize_button}
//       onMouseDown={startResizing}
//       onMouseMove={resize}
//       onMouseUp={stopResizing}
//       onMouseLeave={stopResizing}
//     ></div>
//   );
// };

// export default ResizeButton;

import { RefObject, useCallback, useState, useEffect } from "react";
import styles from "./resizeButton.module.css";
import { getOffset } from "@/app/utils/utils";

interface ResizeButtonProps {
  resizableRef: RefObject<HTMLDivElement>;
}

const ResizeButton = ({ resizableRef }: ResizeButtonProps) => {
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (isResizing && resizableRef.current) {
        // const offset = getOffset(resizableRef.current.parentElement);
        const rect = resizableRef.current.getBoundingClientRect();

        const newWidth = e.clientX - rect.left;
        const newHeight = e.clientY - rect.top;
        resizableRef.current.style.width = `${newWidth}px`;
        resizableRef.current.style.height = `${newHeight}px`;
      }
    },
    [isResizing, resizableRef]
  );

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", resize);
      window.addEventListener("mouseup", stopResizing);
    } else {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    }

    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

  return (
    <div className={styles.resize_button} onMouseDown={startResizing}></div>
  );
};

export default ResizeButton;
