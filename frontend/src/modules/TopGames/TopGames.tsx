import { GamesList } from "modules";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopGamesSelector } from "redux/Games/selectors";
import { getTopGamesRequestAction } from "redux/Games/GamesSlice";

import { Container, Header, Hr, Row, Title } from "./styles";

const TopGames = () => {
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
      <Row>
        <GamesList games={topGames} />
      </Row>
    </Container>
  );
};

export default TopGames;
