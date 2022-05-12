import { Form } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  padding: 20px;
  border-radius: 25px;
  background-color: #121212;

  @media (max-width: 600px) {
    width: 325px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  color: white;
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

export const Span = styled.span``;

export const Body = styled.div`
  @media (max-width: 600px) {
    width: 270px;
  }
`;

export const Footer = styled.div`
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
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #562370;
  cursor: pointer;

  &:hover {
    background-color: red;
  }

  &:disabled {
    background-color: gray;
  }
`;

export const ContainerMessage = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const MessageError = styled.span`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: red;
`;
