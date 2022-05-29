import { Field } from "formik";
import styled from "styled-components";
import { colors } from "styles";

export const Wrapper = styled.div``;

export const FormControl = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 6px;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: ${colors.WHEAT};
`;

export const StyledField = styled(Field)`
  width: 270px;
  height: 34px;
  padding: 6px 12px;
  margin-left: 40px;
  font-size: 14px;
  border: 2px solid ${colors.DARK_GRAY};
  color: ${colors.WHITE};
  background-color: transparent;

  &:focus {
    outline: none;
    border: 2px solid ${colors.RED};
    background-color: transparent;
  }

  @media (max-width: 600px) {
    margin-left: 0px;
  }
`;

export const TextError = styled.p`
  margin: 0;
  text-align: end;
  font-size: 1rem;
  color: ${colors.RED};
`;
