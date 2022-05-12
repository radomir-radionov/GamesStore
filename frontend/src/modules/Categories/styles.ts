import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  width: 80%;
  max-width: 1300px;
  min-width: 300px;
  padding: 30px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.6);
`;

export const Header = styled.header`
  border-radius: 30px;
`;

export const Hr = styled.hr``;

export const Title = styled.h3`
  font-size: 1.4rem;
  color: white;
`;

export const Section = styled.section`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const CardTitle = styled.h4`
  color: white;
  text-decoration: none;
`;
export const Img = styled.img``;

export const Card = styled.div`
  width: 250px;
  padding: 20px 50px;
  text-align: center;
  border: 3px solid #f2f2f2;
  border-bottom: 7px solid #f2f2f2;
  border-radius: 20px;
  background-color: black;

  &:hover {
    border: 3px solid #562370;
    border-bottom: 7px solid #562370;
    border-radius: 20px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
