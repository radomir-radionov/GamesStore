import { GameCard } from "modules";
import { StyledGameList } from "./styles";

const GameList = ({ games }: any) => {
  return (
    <StyledGameList>
      {games &&
        games.map((game: any) => (
          <GameCard
            key={game._id}
            _id={game._id}
            name={game.name}
            genre={game.genre}
            image={game.image}
            price={game.price}
            rating={game.rating}
            description={game.description}
            age={game.age}
            platform={game.platform}
            amount={game.amount}
            selected={game.selected}
          />
        ))}
    </StyledGameList>
  );
};

export default GameList;
