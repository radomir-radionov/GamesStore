import { ErrorMessage, Field } from "formik";
import {
  BoxField,
  BoxLabel,
  FormControl,
  Label,
  Row,
  StyledField,
  TextError,
} from "./styles";

interface ITextareaProps {
  label: string;
  name: string;
}

const Textarea = ({ label, name }: ITextareaProps) => {
  return (
    <Row>
      <FormControl>
        <BoxLabel>
          <Label htmlFor={name}>{label}</Label>
        </BoxLabel>
        <BoxField>
          <Field as={StyledField} id={name} name={name} />
        </BoxField>
      </FormControl>
      <ErrorMessage name={name} component={TextError} />
    </Row>
  );
};

export default Textarea;
