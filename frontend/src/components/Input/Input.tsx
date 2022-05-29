import { ErrorMessage } from "formik";
import { FormControl, Label, Wrapper, StyledField, TextError } from "./styles";

interface IInputProps {
  type: string;
  label: string;
  name: string;
}

const Input = ({ type, label, name }: IInputProps) => {
  return (
    <Wrapper>
      <FormControl>
        <Label htmlFor={name}>{label}</Label>
        <StyledField type={type} id={name} name={name} />
      </FormControl>
      <ErrorMessage name={name} component={TextError} />
    </Wrapper>
  );
};

export default Input;
