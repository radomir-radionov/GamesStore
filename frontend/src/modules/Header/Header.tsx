import { HumburgerMenu } from "modules";
import { BoxTitle, Title, Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <BoxTitle>
        <Title>Game Store</Title>
      </BoxTitle>
      <HumburgerMenu />
    </Container>
  );
};

export default Header;
