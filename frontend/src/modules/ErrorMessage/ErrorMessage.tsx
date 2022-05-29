import { Container, Message } from "./styles";

const ErrorMessage = ({ children }: any) => {
  return (
    <Container>
      <Message>{children}</Message>
    </Container>
  );
};

export default ErrorMessage;
