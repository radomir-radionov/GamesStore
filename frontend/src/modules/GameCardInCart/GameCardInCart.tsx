import { useDispatch, useSelector } from "react-redux";
import { updateCartGamesData } from "redux/Games/GamesSlice";
import { getGamesInCartSelector } from "redux/Games/selectors";
import { IGameData } from "types";
import { Select, Option, Td, Tr, Input } from "./styles";

const GameCardInCart = ({ dataGame }: any) => {
  const dispatch = useDispatch();
  const cartGames: IGameData[] = useSelector(getGamesInCartSelector);

  const { name, platform, date, amount, selected, price, _id } = dataGame;

  const onChangeSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedCartGames = cartGames.map((game: any) => {
      if (game._id === e.target.id) {
        return {
          ...game,
          selected: !game.selected,
        };
      }
      return game;
    });
    dispatch(updateCartGamesData(updatedCartGames));
  };

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedCartGames = cartGames.map((game: any) => {
      if (game._id === e.target.id) {
        return {
          ...game,
          amount: e.target.value,
        };
      }
      return game;
    });
    dispatch(updateCartGamesData(updatedCartGames));
  };

  return (
    <Tr>
      <Td>
        <p>{name}</p>
      </Td>
      <Td>
        <Select>
          {platform.map((option: string) => (
            <Option key={option}>{option}</Option>
          ))}
        </Select>
      </Td>
      <Td>{date}</Td>
      <Td>
        <Input
          id={_id}
          type="number"
          min="1"
          value={amount}
          onChange={onChangeAmount}
        />
      </Td>
      <Td>{price}</Td>
      <Td>
        <Input
          id={_id}
          type="checkbox"
          name="select"
          checked={selected}
          onChange={onChangeSelected}
        />
      </Td>
    </Tr>
  );
};

export default GameCardInCart;
