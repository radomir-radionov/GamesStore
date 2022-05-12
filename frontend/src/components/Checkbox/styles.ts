import styled from "styled-components";

export const Row = styled.div`
  margin-bottom: 20px;
`;

export const FormControl = styled.div`
  @media (max-width: 600px) {
    display: block;
  }
`;

export const LabelBox = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label``;

export const OptionBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoxLabel = styled.div``;

export const BoxField = styled.div``;

export const TextError = styled.p`
  margin: 0;
  text-align: end;
  font-size: 1rem;
  color: red;
`;
