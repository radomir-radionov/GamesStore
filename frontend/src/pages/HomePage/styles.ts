import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  margin: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const StyledSpinner = styled.div`
  & {
    position: absolute;
    top: 20%;
    left: 49%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: transparent;
    border: 3px solid #3c3c3c;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    font-family: sans-serif;
    font-size: 15px;
    color: #fff000;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-shadow: 0 0 10px #fff000;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid #fff000;
    border-right: 3px solid #fff000;
    border-radius: 50%;
    animation: animateC 2s linear infinite;
  }
`;

export const StyledSpan = styled.span`
  & {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    transform-origin: left;
    animation: animate 2s linear infinite;
  }

  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff000;
    top: -6px;
    right: -8px;
    box-shadow: 0 0 20px #fff000;
  }
  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
`;

export const ErrorBox = styled.div``;

export const ErrorText = styled.p``;

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