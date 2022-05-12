import {
  AgeFilter,
  CriteriaFilter,
  Footer,
  GameCard,
  GenreFilter,
  Header,
} from "modules";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { SearchBar } from "modules/SearchBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { filteredGamesParams } from "redux/Games/GamesSlice";
import { getFilteredGamesSelector } from "redux/Games/selectors";
import { openModal } from "redux/modalWindow/ModalWindowSlice";
import { getCurrentUserDataSelector } from "redux/userActivity/selectors";
import { IGameData } from "types";
import useSuspense from "utils/UseSuspense/UseSuspense";
import {
  BoxGames,
  BoxSearchBar,
  BoxSort,
  Button,
  Col,
  Container,
  ContainerBoxGames,
  Hr,
  Navigation,
  Row,
  StyledSpinner,
  Title,
  TitlePlatform,
  Wrapper,
} from "./styles";

const ProductPage = () => {
  const dispatch = useDispatch();
  const filteredGamesData: IGameData[] = useSelector(getFilteredGamesSelector);
  const currentUser = useSelector(getCurrentUserDataSelector);
  const [isLoading, setIsLoading] = useState(false);
  const { platform } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const criteria = searchParams.get("criteria") || "";
  const genre = searchParams.get("genre") || "";
  const age = searchParams.get("age") || "";
  const searchText = searchParams.get("searchText") || "";

  const onSelectedValues = (key: string, searchParam: string) => {
    searchParams.set(key, searchParam);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setIsLoading(true);
    const requestData = { age, criteria, genre, platform, searchText };
    dispatch(filteredGamesParams(requestData));
    setIsLoading(false);
  }, [dispatch, age, criteria, genre, platform, searchText]);

  const cards = filteredGamesData.map((game) => (
    <Col key={game._id}>
      <GameCard
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
    </Col>
  ));

  const gameCards = useSuspense(
    isLoading,
    setIsLoading,
    cards,
    <StyledSpinner style={{ top: "40%", left: "59%" }}>Loading</StyledSpinner>,
    <h3 style={{ color: "white" }}>Nothing was found...</h3>
  );

  const onClickOpenEditModal = () => {
    dispatch(openModal({ type: MODAL_TYPES.ADD_GAME_MODAL }));
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <BoxSearchBar>
          <SearchBar
            searchParam={searchText}
            onSelectedParams={onSelectedValues}
          />
          <>
            {currentUser?.role === "Admin" && (
              <Button type="submit" onClick={onClickOpenEditModal}>
                Create Card
              </Button>
            )}
          </>
        </BoxSearchBar>
        <BoxSort>
          <Navigation>
            <TitlePlatform>{platform}</TitlePlatform>
            <Hr />
            <CriteriaFilter
              searchParam={criteria}
              onSelectedParams={onSelectedValues}
            />
            <GenreFilter
              searchParam={genre}
              onSelectedParams={onSelectedValues}
            />
            <AgeFilter searchParams={age} onSelectedParams={onSelectedValues} />
          </Navigation>
          <ContainerBoxGames>
            <BoxGames>
              <Title>Products</Title>
              <Hr />
              <Row>{gameCards}</Row>
            </BoxGames>
          </ContainerBoxGames>
        </BoxSort>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default ProductPage;
