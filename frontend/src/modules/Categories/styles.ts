import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "styles";

export const Container = styled.section`
  width: 80%;
  max-width: 1300px;
  min-width: 300px;
  padding: 28px;
  border-radius: 28px;
  background: ${colors.BOX_SHADOW_DARK};
`;

export const Header = styled.header`
  border-radius: 28px;
`;

export const Hr = styled.hr``;

export const Title = styled.h2`
  color: ${colors.WHITE};
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 28px;
`;

export const CardTitle = styled.h4`
  color: ${colors.WHITE};
`;
export const Img = styled.img`
  margin-bottom: 8px;
`;

export const Card = styled.div`
  width: 260px;
  padding: 28px 48px;
  text-align: center;
  border: 2px solid ${colors.LIGHT_GRAY};
  border-bottom: 6px solid ${colors.LIGHT_GRAY};
  border-radius: 20px;
  background-color: ${colors.BLACK};

  &:hover {
    border: 2px solid ${colors.RED};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
