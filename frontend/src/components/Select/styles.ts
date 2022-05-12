import { Field } from "formik";
import styled from "styled-components";

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
  border: 2px solid #ccc;
  color: white;
  background: transparent;
`;

export const Option = styled.option`
  background-color: #121212;
`;

export const TextError = styled.p`
  margin: 0;
  text-align: end;
  font-size: 1rem;
  color: red;
`;
