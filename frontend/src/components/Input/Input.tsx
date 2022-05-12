import { ErrorMessage } from "formik";
import { FormControl, Label, Row, StyledField, TextError } from "./styles";

interface IInputProps {
  type: string;
  label: string;
  name: string;
}

const Input = ({ type, label, name }: IInputProps) => {
  return (
    <Row>
      <FormControl>
        <Label htmlFor={name}>{label}</Label>
        <StyledField type={type} id={name} name={name} />
      </FormControl>
      <ErrorMessage name={name} component={TextError} />
    </Row>
  );
};

export default Input;
