import styled from "styled-components";

export const BoxButton = styled.div`
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  margin: 10px;
  padding: 10px 20px 10px 20px;
  font-size: large;
  border: none;
  border-radius: 10px;
  background-color: #562370;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;

export const BoxBalance = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Text = styled.p`
  font-size: larger;
  font-weight: bold;
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 1rem;
`;
