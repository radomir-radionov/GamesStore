import styled from "styled-components";
import { colors } from "styles";

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  padding-left: 24px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: ${colors.WHITE};
`;

export const Criteries = styled.div`
  display: flex;
`;

export const Label = styled.label`
  display: block;
  color: ${colors.WHITE};
`;

export const Select = styled.select`
  width: 130px;
  margin-left: 26px;
  outline: 1px solid ${colors.WHITE};
  color: ${colors.WHITE};
  background: transparent;
  cursor: pointer;
`;

export const Option = styled.option`
  color: ${colors.BLACK};
  background: transparent;
`;
