import { Form } from "formik";
import styled from "styled-components";
import { colors } from "styles";

export const StyledForm = styled(Form)`
  padding: 20px;
  border-radius: 24px;
  color: ${colors.WHEAT};
  background-color: #121212;

  @media (max-width: 600px) {
    width: 320px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 2rem;
  color: ${colors.WHEAT};
`;

export const CloseBtn = styled.button`
  background: transparent;
  border: none;
  color: ${colors.GRAY};
  font-size: 3rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${colors.RED};
  }
`;

export const Span = styled.span``;

export const Body = styled.section`
  @media (max-width: 600px) {
    width: 270px;
  }
`;

export const Footer = styled.footer`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 700px) {
    display: block;
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 45px;
  margin-bottom: 10px;
  font-size: large;
  border: 2px solid ${colors.WHEAT};
  border-radius: 10px;
  color: ${colors.WHEAT};
  background-color: ${colors.BLACK};
  cursor: pointer;

  &:hover {
    background-color: ${colors.DARK_RED};
  }

  &:disabled {
    background-color: gray;
  }
`;
