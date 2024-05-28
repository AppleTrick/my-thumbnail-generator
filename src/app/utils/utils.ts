import { RefObject } from "react";

export const triggerFileInputClick = (
  inputRef: RefObject<HTMLInputElement>
) => {
  if (inputRef.current) {
    inputRef.current.click();
  }
};
