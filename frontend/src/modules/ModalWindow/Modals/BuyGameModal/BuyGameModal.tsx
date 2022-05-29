import { useDispatch, useSelector } from "react-redux";
import { updateCartGamesData } from "redux/Games/GamesSlice";
import { getGamesInCartSelector } from "redux/Games/selectors";
import { closeModal } from "redux/modalWindow/ModalWindowSlice";
import { getUserBalanceSelector } from "redux/User/selectors";
import { updateUserBalance } from "redux/User/UserSlice";
import { IGameData } from "types";
import {
  Body,
  BodyText,
  Button,
  CloseBtn,
  Header,
  Modal,
  Span,
  Title,
} from "./styles";

const BuyGameModal = () => {
  const dispatch = useDispatch();
  const cartGames: IGameData[] = useSelector(getGamesInCartSelector);
  const userBalance = useSelector(getUserBalanceSelector);

  const selectedCartGames = cartGames.filter((game) => game.selected === true);
  const selectedGamesCosts = selectedCartGames.map(
    (game) => +game.price * +game.amount
  );
  const totalCost = selectedGamesCosts.reduce((sum, game) => sum + game, 0);

  const onClickSendBuyGameModal = () => {
    const currentBalance = +userBalance - totalCost;
    const updatedCartGames = cartGames.filter((game) => game.selected !== true);
    dispatch(updateCartGamesData(updatedCartGames));
    dispatch(updateUserBalance(currentBalance.toString()));
    dispatch(closeModal());
  };

  const onClickCloseBuyGameModal = () => {
    dispatch(closeModal());
  };

  return (
    <Modal>
      <Header>
        <Title>Buy Games</Title>
        <CloseBtn type="button" onClick={onClickCloseBuyGameModal}>
          <Span> &times;</Span>
        </CloseBtn>
      </Header>
      <Body>
        <BodyText>Your total is {totalCost}$.</BodyText>
        <BodyText>Are you sure?</BodyText>
        <Button onClick={onClickSendBuyGameModal}>Yes</Button>
        <Button onClick={onClickCloseBuyGameModal}>No</Button>
      </Body>
    </Modal>
  );
};

export default BuyGameModal;
