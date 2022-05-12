import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form``;
export const Input = styled.input`
  width: 250px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.6);

  &:hover {
    outline: 2px solid red;
  }

  &:focus {
    outline: 2px solid red;
  }
`;
