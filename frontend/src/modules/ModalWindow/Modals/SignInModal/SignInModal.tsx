import { Formik } from "formik";
import { initialValues, validationSchema } from "./FormicConfig";
import FormikControl from "../../formikControl";
import { useDispatch } from "react-redux";
import { closeModal } from "redux/modalWindow/ModalWindowSlice";
import { loginData } from "redux/User/UserSlice";
import {
  Body,
  Button,
  CloseBtn,
  Footer,
  Header,
  Span,
  StyledForm,
  Title,
} from "./styles";

interface IValues {
  email: string;
  password: string;
}

const SignInModal = () => {
  const dispatch = useDispatch();

  const onSubmit = (values: IValues) => {
    const dataUser = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginData(dataUser));
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
          <Title>Sign In</Title>
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
          <FormikControl
            control="input"
            type="text"
            label="Password"
            name="password"
          />
        </Body>
        <Footer>
          <Button type="submit">Submit</Button>
        </Footer>
      </StyledForm>
    </Formik>
  );
};

export default SignInModal;
