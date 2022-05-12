import styled from "styled-components";

export const Modal = styled.form`
  width: 400px;
  padding: 0px 30px 20px 30px;
  border-radius: 2rem;
  background-color: #121212;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  color: white;
`;

export const Body = styled.div`
  @media (max-width: 600px) {
    width: 270px;
  }
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

export const BodyText = styled.p`
  color: white;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 10px 20px 10px 20px;
  font-size: large;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #562370;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;
