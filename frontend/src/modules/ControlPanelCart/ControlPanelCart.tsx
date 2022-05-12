import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useDispatch, useSelector } from "react-redux";
import { updateCartGamesData } from "redux/Games/GamesSlice";
import { getGamesInCartSelector } from "redux/Games/selectors";
import { openModal } from "redux/modalWindow/ModalWindowSlice";
import { getUserBalanceSelector } from "redux/userActivity/selectors";
import { IGameData } from "types";
import { BoxBalance, BoxButton, Button, Hr, Text } from "./styles";

const ControlPanelCart = () => {
  const dispatch = useDispatch();
  const cartGames: IGameData[] = useSelector(getGamesInCartSelector);
  const userBalance = useSelector(getUserBalanceSelector);

  const selectedCartGames = cartGames.filter((game) => game.selected === true);

  const selectedGamesCosts = selectedCartGames.map(
    (game) => +game.price * +game.amount
  );
  const totalCost = selectedGamesCosts.reduce((sum, game) => sum + game, 0);
  const currentBalance = +userBalance;

  const onClickRemoveButtonHandler = () => {
    const updatedCartGames = cartGames.filter((game) => game.selected !== true);
    dispatch(updateCartGamesData(updatedCartGames));
  };

  const onClickOpenBuyModal = () => {
    dispatch(openModal({ type: MODAL_TYPES.BUY_GAME_MODAL }));
  };

  return (
    <>
      <BoxButton>
        <Button onClick={onClickRemoveButtonHandler}>Remove</Button>
      </BoxButton>
      <Hr />
      <BoxBalance>
        <Text>Games cost: {totalCost.toFixed(2)} $</Text>
        <Text>Your balance: {currentBalance} $</Text>
        <Button onClick={onClickOpenBuyModal}>Buy</Button>
      </BoxBalance>
    </>
  );
};

export default ControlPanelCart;
