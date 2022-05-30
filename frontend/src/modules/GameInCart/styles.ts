import { colors } from "styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 250px;
  height: 130px;
  color: ${colors.WHITE};
`;

export const Img = styled.img`
  width: 100px;
  margin-right: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  color: ${colors.WHEAT};
`;

export const Price = styled.span`
  font-size: 18px;
  color: ${colors.WHEAT};
`;

export const BoxInput = styled.div`
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 24px;
  height: 24px;
  margin: 0;
  color: black;
  cursor: pointer;
`;
