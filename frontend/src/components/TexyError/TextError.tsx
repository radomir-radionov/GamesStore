import { ErrorMessage, Text } from "./styles";

const TextError = ({ text }: any) => {
  return (
    <ErrorMessage>
      <Text>{text}</Text>
    </ErrorMessage>
  );
};

export default TextError;
