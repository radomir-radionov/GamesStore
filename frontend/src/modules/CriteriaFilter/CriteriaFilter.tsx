import { criteries } from "./data";
import { Criteries, Form, Label, Select, Title, Option } from "./styles";

interface ICriteriaFilterProps {
  searchParam: string;
  onSelectedParams: (key: string, searchParam: string) => void;
}

const CriteriaFilter = ({
  searchParam,
  onSelectedParams,
}: ICriteriaFilterProps) => {
  return (
    <Form>
      <Title>Sort</Title>
      <Criteries>
        <Label>Criteria</Label>
        <Select
          value={searchParam}
          onChange={(e) => {
            onSelectedParams("criteria", e.target.value);
          }}
        >
          {criteries.map(({ id, name, value }) => (
            <Option value={value} key={id}>
              {name}
            </Option>
          ))}
        </Select>
      </Criteries>
    </Form>
  );
};

export default CriteriaFilter;
