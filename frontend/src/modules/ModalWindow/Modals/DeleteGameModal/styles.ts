import styled from "styled-components";
import { colors } from "styles";

export const Modal = styled.form`
  width: 400px;
  padding: 24px;
  border-radius: 24px;
  background-color: #121212;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 2rem;
  color: ${colors.WHEAT};
`;

export const Body = styled.div`
  margin-top: 18px;

  @media (max-width: 600px) {
    width: 270px;
  }
`;

export const CloseBtn = styled.button`
  border: none;
  color: ${colors.GRAY};
  font-size: 3rem;
  cursor: pointer;
  transition: 0.3s;
  background: transparent;

  &:hover {
    color: ${colors.RED};
  }
`;

export const Span = styled.span``;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;

  @media (max-width: 700px) {
    display: block;
  }
`;

export const Button = styled.button`
  width: 90px;
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

export const Name = styled.span`
  color: ${colors.RED};
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${colors.WHEAT};
`;
