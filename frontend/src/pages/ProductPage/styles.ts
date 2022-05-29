import { colors } from "styles";
import styled from "styled-components";

interface ITitleProps {
  textAlign: string;
}

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 20px;
  padding-bottom: 40px;
  border-radius: 30px;
`;

export const BoxSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 140px;
  height: 44px;
  border: none;
  font-size: large;
  border-radius: 10px;
  color: ${colors.WHITE};
  background-color: ${colors.VIOLET};
  cursor: pointer;

  &:hover {
    background-color: ${colors.RED};
  }
`;

export const BoxFilters = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 14px;
`;

export const BoxGames = styled.div`
  position: relative;
  width: 70%;
  padding: 15px 15px 24px 15px;
  margin-left: 30px;

  border-radius: 30px;
  background: ${colors.BOX_SHADOW};

  @media (max-width: 600px) {
    margin-left: 0px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Title = styled("h3")<ITitleProps>`
  padding-left: ${(props) => (props.textAlign === "center" ? "0" : "24px")};
  margin-bottom: 10px;
  text-align: ${(props) => (props.textAlign === "center" ? "center" : "left")};
  font-size: 1.2rem;
  color: ${colors.WHITE};
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px 80px;
  margin-top: 50px;
`;
