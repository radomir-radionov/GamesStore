import styled from "styled-components";
import { colors } from "styles";

export const Section = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const CardProfile = styled.section`
  padding: 14px;
  border-radius: 30px;
  background-color: ${colors.BOX_SHADOW_DARK};
`;

export const BoxTitle = styled.header`
  padding: 0 0 14px 14px;
  margin-bottom: 14px;
  border-bottom: 2px solid ${colors.WHITE};
`;

export const Title = styled.p`
  margin: 0;
  font-size: 2rem;
  text-align: left;
  color: ${colors.WHITE};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
