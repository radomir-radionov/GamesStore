import styled from "styled-components";
import { colors } from "styles";

interface ITitleProps {
  textAlign: string;
}

export const StyledFiltersBar = styled.nav`
  width: 250px;
  max-height: 560px;
  padding: 16px;
  border-radius: 30px;
  background: ${colors.BOX_SHADOW};
`;

export const Title = styled("h3")<ITitleProps>`
  margin-bottom: 10px;
  padding-left: ${(props) => (props.textAlign === "center" ? "0" : "24px")};
  text-align: ${(props) => (props.textAlign === "center" ? "center" : "left")};
  font-size: 1.2rem;
  color: ${colors.WHITE};
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 1rem;
`;
