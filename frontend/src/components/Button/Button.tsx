import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface IButtonProps {
  text: ReactNode;
  onClick: () => void;
}

const Button = ({ text, onClick }: IButtonProps) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
