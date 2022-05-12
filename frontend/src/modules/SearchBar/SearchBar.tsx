import { Container, Form, Input } from "./styles";

interface ISearchBarProps {
  searchParam: string;
  onSelectedParams: (key: string, searchParam: string) => void;
}

const SearchBar = ({ searchParam, onSelectedParams }: ISearchBarProps) => {
  return (
    <Container>
      <Form>
        <Input
          value={searchParam}
          type="search"
          placeholder="Search"
          onChange={(e) => {
            onSelectedParams("searchText", e.target.value);
          }}
        />
      </Form>
    </Container>
  );
};

export default SearchBar;
