import axios from "axios";
import { Footer, GameCard, Games, Header } from "modules";
import { Categories } from "modules/Categories";
import { ShowErrorModal } from "modules/ModalWindow/Modals";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getErrorSelector } from "redux/userActivity/selectors";
import { IGameData } from "types";
import { UseDebounce } from "utils";
import {
  Container,
  ErrorBox,
  ErrorText,
  Form,
  Input,
  Row,
  StyledSpan,
  StyledSpinner,
  Wrapper,
} from "./styles";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedCard, setSearchedCard] = useState<IGameData[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(false);
  const debouncedSearchValue = UseDebounce(searchText, 1200);
  const errorData = useSelector(getErrorSelector);

  useEffect(() => {
    if (debouncedSearchValue !== null) {
      setIsSearching(true);
      axios
        .get(
          `http://localhost:5000/api/search?searchText=${debouncedSearchValue}`
        )
        .then((response) => {
          if (response.status === 201) {
            setError(true);
            setIsSearching(false);
          } else {
            setError(false);
            setIsSearching(false);
            setSearchedCard(response.data);
          }
        })
        .catch(() => {
          setError(true);
          setIsSearching(false);
        });
    }
  }, [debouncedSearchValue]);

  return (
    <Wrapper>
      <Header />
      {errorData.isError && <ShowErrorModal />}
      <Container>
        <Form>
          <Input
            value={searchText}
            type="search"
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </Form>
        {error ? (
          <ErrorBox>
            <ErrorText style={{ color: "black" }}>
              No results. Write a full name. For example: CS:GO
            </ErrorText>
          </ErrorBox>
        ) : (
          <Row>
            {searchedCard.map((game) => (
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
          </Row>
        )}
        {isSearching && (
          <StyledSpinner className="ring">
            Loading
            <StyledSpan />
          </StyledSpinner>
        )}
        <Categories />
        <Games />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default HomePage;
