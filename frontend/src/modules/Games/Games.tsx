import { GameCard } from "modules";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopGamesSelector } from "redux/Games/selectors";
import { getTopGamesRequestAction } from "redux/Games/GamesSlice";
import { IGameData } from "types";
import { Col, Container, Header, Hr, Row, Title } from "./styles";

const Games = () => {
  const dispatch = useDispatch();
  const topGames = useSelector(getTopGamesSelector);

  useEffect(() => {
    if (!topGames.length) {
      dispatch(getTopGamesRequestAction());
    }
  }, [dispatch, topGames]);

  return (
    <Container>
      <Header>
        <Title>New games</Title>
        <Hr />
      </Header>
      {topGames && (
        <Row>
          {topGames.map((topGame: IGameData) => (
            <Col key={topGame._id}>
              <GameCard
                _id={topGame._id}
                name={topGame.name}
                genre={topGame.genre}
                image={topGame.image}
                price={topGame.price}
                rating={topGame.rating}
                description={topGame.description}
                age={topGame.age}
                platform={topGame.platform}
                amount={topGame.amount}
                selected={topGame.selected}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Games;
