import { HumburgerMenu } from "..";
import { BoxTitle, Title, Wrapper } from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <BoxTitle>
        <Title>Game Store</Title>
      </BoxTitle>
      <HumburgerMenu />
    </Wrapper>
  );
};

export default Header;
