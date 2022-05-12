import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  min-height: 80vh;
  display: block;
  gap: 80px;
  border-radius: 30px;
`;

export const BoxSearchBar = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 140px;
  height: 45px;
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

export const BoxSort = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const Navigation = styled.nav`
  width: 250px;
  height: 575px;
  padding: 15px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.6);
`;

export const TitlePlatform = styled.h3`
  margin: 0 0 0.5rem 0;
  text-align: center;
  font-size: 1.4rem;
  color: white;
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 1rem;
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

export const ContainerBoxGames = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  gap: 30px;

  @media (max-width: 600px) {
    margin-left: 0px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const BoxGames = styled.div`
  min-height: 60vh;
  padding: 15px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.6);
`;

export const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  padding: 0 0 0 2rem;
  font-size: 1.4rem;
  color: white;
`;

export const Row = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px 80px;
`;

export const Col = styled.div`
  cursor: pointer;
`;
