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

export const Label = styled.label``;

export const StyledField = styled(Field)`
  padding: 6px 12px;
  margin-left: 40px;
  font-size: 14px;
  width: 270px;
  height: 35px;
  border: 2px solid #ccc;
  color: white;
  background-color: transparent;

  &:focus {
    outline: none;
    border: 2px solid red;
    color: white;
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
  color: red;
`;
