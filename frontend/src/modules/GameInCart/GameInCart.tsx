import { Description } from "modules/GameCard/styles";
import { useDispatch, useSelector } from "react-redux";
import { updateCartGamesData } from "redux/Games/GamesSlice";
import { getGamesInCartSelector } from "redux/Games/selectors";
import { IGameData } from "types";
import {
  BoxInput,
  Container,
  Content,
  Img,
  Input,
  Price,
  Title,
} from "./styles";

const GameInCart = ({ dataGame }: any) => {
  const dispatch = useDispatch();
  const cartGames: IGameData[] = useSelector(getGamesInCartSelector);

  const { name, selected, price, _id, image } = dataGame;

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

  return (
    <Container>
      <Img src={image} alt="Game img" />
      <Content>
        <Description>
          <Title>{name}</Title>
          <Price>${price}</Price>
        </Description>
        <BoxInput>
          <Input
            id={_id}
            type="checkbox"
            name="select"
            checked={selected}
            onChange={onChangeSelected}
          />
        </BoxInput>
      </Content>
    </Container>
  );
};

export default GameInCart;
