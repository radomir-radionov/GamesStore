import styled from "styled-components";

export interface ICardImage {
  image: string;
}

export const Front = styled.div`
  width: 240px;
  height: 380px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 20px;
  transition: 1s;
  backface-visibility: hidden;
  background-color: black;
  box-shadow: 0 0 3px 3px #562370;

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
  background-color: black;
  transform: rotateY(180deg);
  box-shadow: 0 0 3px 3px #562370;
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
  background-color: rgba(0, 0, 0, 0.6);
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

export const Title = styled.p`
  font-weight: bolder;
  color: white;
`;

export const Price = styled.p`
  font-weight: bolder;
  color: white;
`;

export const BoxDescription = styled.div`
  height: 230px;
  margin: 5px 0 8px 0;
`;

export const Description = styled.p`
  text-decoration: none;
  color: white;
`;

export const Age = styled.p`
  margin-bottom: 15px;
  text-align: center;
  color: white;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  margin: 0 10px 0 10px;
  padding: 21px 15px 15px 15px;
  border: none;
  border-radius: 10px;
  font-weight: bolder;
  color: white;
  background-color: #562370;
  cursor: pointer;

  &:hover {
    background-color: #8f31be;
  }
`;
