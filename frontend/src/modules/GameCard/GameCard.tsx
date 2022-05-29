import { PC, Playstation, Xbox } from "assets";
import { Rating } from "modules";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useDispatch, useSelector } from "react-redux";
import { addEditGameData, addGameInCart } from "redux/Games/GamesSlice";
import { getGamesInCartSelector } from "redux/Games/selectors";
import { openModal } from "redux/modalWindow/ModalWindowSlice";
import { getCurrentUserDataSelector } from "redux/User/selectors";
import { IGameData } from "types";
import {
  Card,
  Front,
  ImgIcon,
  Platforms,
  Image,
  Body,
  Title,
  Price,
  Back,
  Description,
  Age,
  BoxDescription,
  Footer,
  Button,
} from "./styles";

const GameCard = ({
  _id,
  name,
  genre,
  image,
  price,
  rating,
  description,
  age,
  platform,
  amount,
  selected,
}: IGameData) => {
  const dispatch = useDispatch();
  const cartGames: IGameData[] = useSelector(getGamesInCartSelector);
  const currentUser = useSelector(getCurrentUserDataSelector);

  const dateTime = new Date();
  let month = dateTime.getMonth().toString();
  if (dateTime.getMonth() < 10) {
    month = `${dateTime.getMonth()}${1}`;
  }
  let day = dateTime.getDate().toString();
  if (dateTime.getDate() < 10) {
    day = `0${dateTime.getDate()}`;
  }
  const date = `${month}/${day}/${dateTime.getFullYear()}`;

  const currentGameData = {
    _id,
    name,
    genre,
    image,
    price,
    rating,
    description,
    age,
    platform,
    amount,
    selected,
    date,
  };

  const onClickEditButtonHandler = () => {
    dispatch(addEditGameData(currentGameData));
    dispatch(openModal({ type: MODAL_TYPES.EDIT_GAME_MODAL }));
  };

  const onClickAddButtonHandler = () => {
    const isEven = cartGames.some(
      (cartGame) => currentGameData._id === cartGame._id
    );
    if (!isEven) {
      dispatch(addGameInCart(currentGameData));
    }
  };

  const dataPlatforms = platform.map((itemPlatform) => ({
    name: itemPlatform,
    image:
      itemPlatform === "Playstation"
        ? Playstation
        : itemPlatform === "Xbox"
        ? Xbox
        : PC,
  }));

  return (
    <Card key={_id}>
      <Front>
        <Platforms>
          {dataPlatforms.map((dataPlatform) => (
            <ImgIcon
              key={dataPlatform.name}
              src={dataPlatform.image}
              alt={dataPlatform.name}
            />
          ))}
        </Platforms>
        <Image image={image} />
        <Body>
          <Title>{name}</Title>
          <Price>{price}$</Price>
        </Body>
        <Rating value={rating} />
      </Front>
      <Back>
        <BoxDescription>
          <Description>{description}</Description>
        </BoxDescription>
        <Age>{age}+</Age>
        {currentUser?.role === "Admin" && (
          <Footer>
            <Button type="submit" onClick={onClickAddButtonHandler}>
              Add to cart
            </Button>
            <Button type="submit" onClick={onClickEditButtonHandler}>
              Edit
            </Button>
          </Footer>
        )}
        {currentUser?.role === "User" && (
          <Footer>
            <Button type="submit" onClick={onClickAddButtonHandler}>
              Add to cart
            </Button>
          </Footer>
        )}
      </Back>
    </Card>
  );
};

export default GameCard;
