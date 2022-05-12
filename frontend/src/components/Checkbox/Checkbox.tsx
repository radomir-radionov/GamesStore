import { ErrorMessage, Field } from "formik";
import {
  BoxField,
  BoxLabel,
  FormControl,
  Label,
  LabelBox,
  OptionBox,
  Row,
  TextError,
} from "./styles";

interface ICheckboxProps {
  label: string;
  name: string;
}

const Checkbox = ({ label, name }: ICheckboxProps) => {
  const checkboxOptionsPlatform = [
    { key: "PC", value: "PC" },
    { key: "Playstation 5", value: "Playstation" },
    { key: "Xbox", value: "Xbox" },
  ];

  return (
    <Row>
      <FormControl>
        <LabelBox>
          <Label htmlFor={name}>{label}</Label>
        </LabelBox>
        {checkboxOptionsPlatform.map((option) => (
          <OptionBox key={option.key}>
            <BoxLabel>
              <Label>{option.key}</Label>
            </BoxLabel>
            <BoxField>
              <Field type="checkbox" name={name} value={option.value} />
            </BoxField>
          </OptionBox>
        ))}
      </FormControl>
      <ErrorMessage name={name} component={TextError} />
    </Row>
  );
};

export default Checkbox;
