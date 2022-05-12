import { Blizzard, Dota, Rockstar } from "assets";
import { games } from "constants/games";
import { BoxLink, Container, Img, Link, Title } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Title>Incredible convenient</Title>
      <BoxLink>
        <Link href={games.DOTA}>
          <Img src={Dota} alt="dota" />
        </Link>
        <Link href={games.ROCKSTAR}>
          <Img src={Rockstar} alt="rockstar" />
        </Link>
        <Link href={games.BLIZZARD}>
          <Img src={Blizzard} alt="blizzard" />
        </Link>
      </BoxLink>
    </Container>
  );
};

export default Footer;
