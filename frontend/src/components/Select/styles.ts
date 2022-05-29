import { Field } from "formik";
import styled from "styled-components";
import { colors } from "styles";

export const Row = styled.div`
  margin-bottom: 20px;
`;

export const FormControl = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label``;

export const StyledField = styled(Field).attrs({
  as: "select",
})`
  padding: 6px;
  border: 2px solid ${colors.WHEAT};
  border-radius: 6px;
  color: ${colors.WHEAT};
  background-color: transparent;
  cursor: pointer;
`;

export const Option = styled.option`
  background-color: ${colors.LIGHT_BLACK};
`;

export const TextError = styled.p`
  margin: 0;
  text-align: end;
  font-size: 1rem;
  color: ${colors.RED};
`;
