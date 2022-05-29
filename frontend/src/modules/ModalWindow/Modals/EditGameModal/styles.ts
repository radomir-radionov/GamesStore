import { Form } from "formik";
import styled from "styled-components";
import { colors } from "styles";

export interface ICardImage {
  image: string;
}

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
  color: #808080;
  font-size: 50px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: red;
  }
`;

export const Body = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const BoxImage = styled.div`
  margin-right: 30px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const BoxFields = styled.div`
  width: 400px;

  @media (max-width: 700px) {
    width: 270px;
  }
`;

export const Image = styled.div<ICardImage>`
  width: 200px;
  height: 260px;
  margin-top: 16px;
  background-image: url(${({ image }) => image});
  background-size: cover;
`;

export const Button = styled.button`
  width: 180px;
  height: 46px;
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
    background-color: ${colors.GRAY};
    cursor: not-allowed;
  }
`;

export const Footer = styled.footer`
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const Span = styled.span``;

//////////////////////////////////////////

export const StyledForm = styled(Form)`
  padding: 30px;
  border-radius: 26px;
  font-size: 1.2rem;
  color: ${colors.WHEAT};
  background-color: #121212;

  @media (max-width: 600px) {
    width: 320px;
  }
`;
