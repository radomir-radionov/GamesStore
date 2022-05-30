import styled from "styled-components";
import { colors } from "styles";

export const Section = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 80%;
  padding: 25px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 50px;
  background: ${colors.BOX_SHADOW_DARK};
`;

export const GamesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 40px;
`;

export const BoxTitle = styled.header`
  padding-left: 24px;
  margin-bottom: 10px;
  border-bottom: 2px solid ${colors.WHEAT};
  color: ${colors.WHITE};
`;

export const Title = styled.h2`
  padding-left: 24px;
  margin-bottom: 10px;
  color: ${colors.WHEAT};
`;
