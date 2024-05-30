import { useCallback, useState } from "react";
import styles from "./resizeButton.module.css";

const ResizeButton = () => {
  const [isResizing, setIsResizing] = useState(false);

  // 리사이징 시작
  const startResizing = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  // 리사이즈 정지
  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  // 리사이즈 하는 방법
  const resize = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      //   if (isResizing && resizableRef.current) {
      //     const newWidth =
      //       e.clientX - resizableRef.current.getBoundingClientRect().left;
      //     const newHeight =
      //       e.clientY - resizableRef.current.getBoundingClientRect().top;
      //   }
      if (isResizing) {
        console.log(e.clientX, e.clientY);
      }
    },
    [isResizing]
  );

  return (
    <div
      className={styles.resize_button}
      onMouseDown={startResizing}
      onMouseMove={resize}
      onMouseUp={stopResizing}
      onMouseLeave={stopResizing}
    ></div>
  );
};

export default ResizeButton;
