import { Form } from "formik";
import styled from "styled-components";
import { colors } from "styles";

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-around;
  gap: 40px;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 180px;
  height: 45px;
  margin-bottom: 10px;
  font-size: large;
  border: 2px solid ${colors.WHEAT};
  border-radius: 10px;
  color: ${colors.WHEAT};
  background-color: ${colors.BLACK};
  cursor: pointer;

  &:hover {
    background-color: ${colors.DARK_RED};
  }

  &:disabled {
    background-color: gray;
  }
`;
