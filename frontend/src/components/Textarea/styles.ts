import { Field } from "formik";
import styled from "styled-components";

export const Row = styled.div`
  margin-bottom: 20px;
`;

export const FormControl = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const StyledField = styled(Field).attrs({
  as: "textarea",
})`
  width: 270px;
  height: 100px;
  padding: 5px;
  border: 2px solid #ccc;
  color: white;
  background-color: transparent;
  resize: none;
`;

export const Label = styled.label``;

export const TextError = styled.p`
  margin: 0;
  text-align: end;
  font-size: 1rem;
  color: red;
`;

export const BoxLabel = styled.div``;

export const BoxField = styled.div``;
