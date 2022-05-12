import { Formik } from "formik";
import { closeModal } from "redux/modalWindow/ModalWindowSlice";
import { initialValues, validationSchema } from "./FormicConfig";
import {
  Body,
  Button,
  CloseBtn,
  ErrorBox,
  Footer,
  Header,
  MessageError,
  Span,
  StyledForm,
  Title,
} from "./styles";
import FormikControl from "../../formikControl";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "redux/userActivity/UserActivitySlice";

interface ISumbitProps {
  email: string;
  name: string;
  password: string;
}

const SignUpModal = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (values: ISumbitProps) => {
    const dataUser = {
      email: values.email,
      name: values.name,
      password: values.password,
    };
    dispatch(setUser(dataUser));
    dispatch(closeModal());
  };

  const onClickCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <StyledForm>
        <Header>
          <Title>Sign Up</Title>
          <CloseBtn type="button" onClick={onClickCloseModal}>
            <Span> &times;</Span>
          </CloseBtn>
        </Header>
        <Body>
          <FormikControl
            control="input"
            type="text"
            label="Email"
            name="email"
          />
          <FormikControl control="input" type="text" label="Name" name="name" />
          <FormikControl
            control="input"
            type="text"
            label="Password"
            name="password"
          />
          <FormikControl
            control="input"
            type="text"
            label="Repeat password"
            name="passwordConfirmation"
          />
        </Body>
        <Footer>
          <Button type="submit">Submit</Button>
        </Footer>
        {errorMessage && (
          <ErrorBox>
            <MessageError>{errorMessage}</MessageError>
          </ErrorBox>
        )}
      </StyledForm>
    </Formik>
  );
};

export default SignUpModal;
