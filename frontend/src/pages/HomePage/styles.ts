import styled from "styled-components";
import { colors } from "styles";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 50px 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const ErrorBox = styled.div``;

export const ErrorText = styled.p`
  font-size: 18px;
  color: ${colors.WHITE};
`;
