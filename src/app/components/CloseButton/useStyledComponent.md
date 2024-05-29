```javascript
import styled from "styled-components";

interface CloseButtonProps {
  deleteData?: () => void;
}

const Button = styled.button`
  width: 20px;
  height: 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: none;
  position: absolute;
  top: 5px;
  right: 5px;

  &:hover {
    background-color: darkred;
  }
`;

const CloseButton: React.FC<CloseButtonProps> = ({ deleteData }) => {
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        if (deleteData) deleteData();
      }}
      className="deleteButton"
    >
      ✕
    </Button>
  );
};

export default CloseButton;
```
