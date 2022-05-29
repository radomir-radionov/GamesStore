import { Spiner } from "components";
import {
  Categories,
  Footer,
  GamesList,
  Header,
  SearchBar,
  TopGames,
} from "modules";
import { ShowErrorModal } from "modules/ModalWindow/Modals";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getSearchedGames } from "redux/Games/GamesSlice";
import {
  getLoadingSelector,
  getSearchedGamesSelector,
} from "redux/Games/selectors";
import { getErrorSelector } from "redux/User/selectors";
import { Main, Row } from "./styles";

const HomePage = () => {
  const dispatch = useDispatch();
  const searchedGames = useSelector(getSearchedGamesSelector);
  const isLoading = useSelector(getLoadingSelector);
  const errorData = useSelector(getErrorSelector);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get("searchText") || "";

  const onSelectedValues = (key: string, searchParam: string) => {
    searchParams.set(key, searchParam);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    dispatch(getSearchedGames(searchText));
  }, [dispatch, searchText]);

  return (
    <>
      <Header />
      {errorData.isError && <ShowErrorModal />}
      <Main>
        <SearchBar
          searchParam={searchText}
          onSelectedParams={onSelectedValues}
        />
        {isLoading && <Spiner />}
        <Row>
          <GamesList games={searchedGames} />
        </Row>
        <Categories />
        <TopGames />
      </Main>
      <Footer />
    </>
  );
};

export default HomePage;
