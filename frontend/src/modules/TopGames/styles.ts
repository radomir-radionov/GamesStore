import styled from "styled-components";
import { colors } from "styles";

export const Container = styled.section`
  width: 80%;
  padding: 28px 28px 68px 28px;
  max-width: 1300px;
  min-width: 300px;
  border-radius: 24px;
  background: ${colors.BOX_SHADOW_DARK};
`;

export const Header = styled.header``;

export const Title = styled.h2`
  font-size: 26px;
  color: ${colors.WHITE};
`;

export const Hr = styled.hr``;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px 80px;
  margin-top: 50px;
`;
