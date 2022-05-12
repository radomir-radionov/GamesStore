import { ControlPanelCart, Footer, Header } from "modules";
import { GameCardInCart } from "modules/GameCardInCart";
import { useSelector } from "react-redux";
import { getGamesInCartSelector } from "redux/Games/selectors";
import { IGameData } from "types";
import {
  Hr,
  Main,
  Table,
  Tbody,
  Th,
  Thead,
  Title,
  Tr,
  Wrapper,
} from "./styles";

const CartPage = () => {
  const cartGames: IGameData[] = useSelector(getGamesInCartSelector);

  return (
    <Wrapper>
      <Header />
      <Main>
        <Title>Cart Page</Title>
        <Hr />
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Platform</Th>
              <Th>Odrer date</Th>
              <Th>Amount</Th>
              <Th>Price($)</Th>
              <Th>Selected</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartGames &&
              cartGames.map((game) => (
                <GameCardInCart key={game._id} dataGame={game} />
              ))}
          </Tbody>
        </Table>
        <ControlPanelCart />
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default CartPage;
