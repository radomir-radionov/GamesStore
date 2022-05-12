import { ErrorMessage, Field } from "formik";
import {
  FormControl,
  Label,
  Row,
  StyledField,
  Option,
  TextError,
} from "./styles";

interface ISelectProps {
  label: string;
  name: string;
}

const Select = ({ label, name }: ISelectProps) => {
  const dropdownOptionsAges = [
    { key: "Select an option", value: "" },
    { key: "3+", value: "3" },
    { key: "6+", value: "6" },
    { key: "12+", value: "12" },
    { key: "16+", value: "16" },
    { key: "18+", value: "18" },
  ];

  return (
    <Row>
      <FormControl>
        <Label htmlFor={name}>{label}</Label>
        <Field as={StyledField} id={name} name={name}>
          {dropdownOptionsAges.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.key}
            </Option>
          ))}
        </Field>
      </FormControl>
      <ErrorMessage name={name} component={TextError} />
    </Row>
  );
};

export default Select;
