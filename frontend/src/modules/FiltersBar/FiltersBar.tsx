import { AgeFilter, CriteriaFilter, GenreFilter } from "modules";
import { useParams, useSearchParams } from "react-router-dom";
import { Hr, StyledFiltersBar, Title } from "./styles";

const FiltersBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { platform } = useParams();

  const criteria = searchParams.get("criteria") || "";
  const genre = searchParams.get("genre") || "";
  const age = searchParams.get("age") || "";

  const onSelectedValues = (key: string, searchParam: string) => {
    searchParams.set(key, searchParam);
    setSearchParams(searchParams);
  };

  return (
    <>
      <StyledFiltersBar>
        <Title textAlign="center">{platform}</Title>
        <Hr />
        <CriteriaFilter
          searchParam={criteria}
          onSelectedParams={onSelectedValues}
        />
        <GenreFilter searchParam={genre} onSelectedParams={onSelectedValues} />
        <AgeFilter searchParams={age} onSelectedParams={onSelectedValues} />
      </StyledFiltersBar>
    </>
  );
};

export default FiltersBar;
