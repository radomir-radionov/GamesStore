import { ages } from "./data";
import { Form, Hr, Label, RadioInput, Title } from "./styles";

interface IAgeFilterParams {
  searchParams: string;
  onSelectedParams: (key: string, searchParam: string) => void;
}

const AgeFilter = ({ searchParams, onSelectedParams }: IAgeFilterParams) => {
  return (
    <Form>
      <Title>Age</Title>
      <Hr />
      {ages.map(({ id, value, name }) => (
        <Label key={id}>
          <RadioInput
            type="radio"
            name="age"
            value={searchParams}
            onChange={() => {
              onSelectedParams("age", value);
            }}
            checked={searchParams === value}
          />
          {name}
        </Label>
      ))}
    </Form>
  );
};

export default AgeFilter;
