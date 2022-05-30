import { colors } from "styles";
import styled from "styled-components";

export interface ICardImage {
  image: string;
}

export const Front = styled.div`
  width: 230px;
  height: 380px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 20px;
  transition: 1s;
  backface-visibility: hidden;
  background-color: ${colors.BLACK};
  box-shadow: 0px 5px 10px 0px ${colors.BOX_SHADOW};

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const Back = styled.div`
  width: 230px;
  height: 380px;
  padding: 10px;
  border-radius: 20px;
  transition: 1s;
  backface-visibility: hidden;
  background-color: ${colors.BLACK};
  transform: rotateY(180deg);
  box-shadow: 0px 5px 10px 0px ${colors.BOX_SHADOW};
`;

export const Card = styled.div`
  position: relative;
  perspective: 500px;
  &:hover ${Front} {
    transform: rotateY(180deg);
  }

  &:hover ${Back} {
    transform: rotateY(360deg);
  }
`;

export const Platforms = styled.div`
  position: absolute;
  padding: 5px;
  border-radius: 18px 0 16px 0;
  background-color: ${colors.BOX_SHADOW};
`;

export const ImgIcon = styled.img`
  height: 15px;
  margin-right: 10px;
`;

export const Image = styled.div<ICardImage>`
  height: 260px;
  border-radius: 20px 20px 0 0;
  background-image: url(${({ image }) => image});
  background-size: cover;
`;

export const Body = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-weight: bolder;
  color: ${colors.WHEAT};
`;

export const Price = styled.h3`
  font-weight: bolder;
  color: ${colors.WHEAT};
`;

export const BoxDescription = styled.div`
  height: 230px;
  margin: 5px 0 8px 0;
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  color: ${colors.WHEAT};
`;

export const Age = styled.p`
  margin-bottom: 14px;
  text-align: center;
  color: ${colors.WHEAT};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;

  margin-bottom: 10px;
  font-size: 1rem;
  border: 2px solid ${colors.WHEAT};
  border-radius: 10px;
  color: ${colors.WHEAT};
  background-color: ${colors.BLACK};
  cursor: pointer;

  &:hover {
    background-color: ${colors.DARK_RED};
  }
`;
