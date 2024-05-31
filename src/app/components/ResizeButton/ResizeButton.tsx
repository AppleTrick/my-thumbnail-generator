import { RefObject, useCallback, useState, useEffect } from "react";
import styles from "./resizeButton.module.css";

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
      e.preventDefault();
      e.stopPropagation();
      if (isResizing && resizableRef.current) {
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
