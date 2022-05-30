import { colors } from "styles";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  color: ${colors.WHITE};
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 120px;
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
`;

export const BoxBalance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  padding-top: 20px;
  border-top: 2px solid ${colors.WHEAT};
`;

export const Text = styled.p`
  font-size: larger;
  font-weight: bold;
  color: ${colors.WHEAT};
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 12px;
`;
