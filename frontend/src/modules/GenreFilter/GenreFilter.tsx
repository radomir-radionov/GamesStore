import { genres } from "./data";
import { Form, Hr, Label, RadioInput, Title } from "./styles";

interface IGenreFilterProps {
  searchParam: string;
  onSelectedParams: (key: string, searchParam: string) => void;
}

const GenreFilter = ({ searchParam, onSelectedParams }: IGenreFilterProps) => {
  return (
    <Form>
      <Title>Genres</Title>
      <Hr />
      {genres.map(({ id, genre, label }) => (
        <Label htmlFor={genre} key={id}>
          <RadioInput
            checked={genre === searchParam}
            type="radio"
            name="genre"
            value={genre}
            onChange={() => {
              onSelectedParams("genre", genre);
            }}
          />
          {label}
        </Label>
      ))}
    </Form>
  );
};

export default GenreFilter;
