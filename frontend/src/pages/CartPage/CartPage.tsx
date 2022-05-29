import { ControlPanelCart, Footer, GameCardInCart, Header } from "modules";
import { useSelector } from "react-redux";
import { getGamesInCartSelector } from "redux/Games/selectors";
import { IGameData } from "types";
import { Hr, Section, Table, Tbody, Th, Thead, Title, Tr } from "./styles";

const CartPage = () => {
  const cartGames: IGameData[] = useSelector(getGamesInCartSelector);

  return (
    <>
      <Header />
      <Section>
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
      </Section>
      <Footer />
    </>
  );
};

export default CartPage;
