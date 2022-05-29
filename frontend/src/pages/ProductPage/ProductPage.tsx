import { Spiner } from "components";
import {
  ErrorMessage,
  FiltersBar,
  Footer,
  GamesList,
  Header,
  SearchBar,
} from "modules";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getFilteredGames } from "redux/Games/GamesSlice";
import {
  getFilteredGamesSelector,
  getLoadingSelector,
} from "redux/Games/selectors";
import { openModal } from "redux/modalWindow/ModalWindowSlice";
import { getCurrentUserDataSelector } from "redux/User/selectors";
import { IGameData } from "types";
import {
  BoxGames,
  BoxSearchBar,
  BoxFilters,
  Button,
  Hr,
  Section,
  Row,
  Title,
} from "./styles";

const ProductPage = () => {
  const dispatch = useDispatch();
  const filteredGames: IGameData[] = useSelector(getFilteredGamesSelector);
  const currentUser = useSelector(getCurrentUserDataSelector);
  const isLoading = useSelector(getLoadingSelector);

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

  const onClickOpenEditModal = () => {
    dispatch(openModal({ type: MODAL_TYPES.ADD_GAME_MODAL }));
  };

  useEffect(() => {
    const requestData = { age, criteria, genre, platform, searchText };
    dispatch(getFilteredGames(requestData));
  }, [dispatch, age, criteria, genre, platform, searchText]);

  return (
    <>
      <Header />
      <Section>
        <BoxSearchBar>
          <SearchBar
            searchParam={searchText}
            onSelectedParams={onSelectedValues}
          />
          {currentUser?.role === "Admin" && (
            <Button type="submit" onClick={onClickOpenEditModal}>
              Create Card
            </Button>
          )}
        </BoxSearchBar>
        <BoxFilters>
          <FiltersBar />
          <BoxGames>
            <Title textAlign="left">Products</Title>
            <Hr />
            <Row>
              {isLoading ? (
                <Spiner />
              ) : filteredGames.length ? (
                <GamesList games={filteredGames} />
              ) : (
                <ErrorMessage>Nothing was found...</ErrorMessage>
              )}
            </Row>
          </BoxGames>
        </BoxFilters>
      </Section>
      <Footer />
    </>
  );
};

export default ProductPage;
