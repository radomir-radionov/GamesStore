import Checkbox from "components/Checkbox/Checkbox";
import Select from "components/Select/Select";
import Textarea from "components/Textarea/Textarea";
import Input from "components/Input/Input";

interface IFormikControlProps {
  control: string;
  type: string;
  label: string;
  name: string;
}

const formikControl = ({ control, type, label, name }: IFormikControlProps) => {
  switch (control) {
    case "input":
      return <Input type={type} label={label} name={name} />;
    case "textarea":
      return <Textarea label={label} name={name} />;
    case "select":
      return <Select label={label} name={name} />;
    case "checkbox":
      return <Checkbox label={label} name={name} />;
    default:
      return null;
  }
};

export default formikControl;
