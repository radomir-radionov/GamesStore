import { ControlPanelCart, Footer, GameInCart, Header } from "modules";
import { useSelector } from "react-redux";
import { getGamesInCartSelector } from "redux/Games/selectors";
import { IGameData } from "types";
import { BoxTitle, GamesBox, Section, Title } from "./styles";

const CartPage = () => {
  const cartGames: IGameData[] = useSelector(getGamesInCartSelector);

  return (
    <>
      <Header />
      <Section>
        <BoxTitle>
          <Title>YOUR SHOPPING CART</Title>
        </BoxTitle>
        <GamesBox>
          {cartGames &&
            cartGames.map((game) => (
              <GameInCart key={game._id} dataGame={game} />
            ))}
        </GamesBox>
        <ControlPanelCart />
      </Section>
      <Footer />
    </>
  );
};

export default CartPage;
