import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { initialValues, validationSchema } from "./FormicConfig";
import FormikControl from "../../formikControl";
import { closeModal } from "redux/modalWindow/ModalWindowSlice";
import { userChangepPasswordData } from "redux/userActivity/UserActivitySlice";
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
  password: string;
  passwordConfirmation: string;
}

const ChangePasswordModal = () => {
  const dispatch = useDispatch();

  const onSubmit = (values: IValues) => {
    dispatch(userChangepPasswordData(values));
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
          <Title>Change Password</Title>
          <CloseBtn type="button" onClick={onClickCloseModal}>
            <Span> &times;</Span>
          </CloseBtn>
        </Header>
        <Body>
          <FormikControl
            control="input"
            type="password"
            label="Password"
            name="password"
          />
          <FormikControl
            control="input"
            type="password"
            label="Repeat password"
            name="passwordConfirmation"
          />
        </Body>
        <Footer>
          <Button type="submit">Submit</Button>
        </Footer>
      </StyledForm>
    </Formik>
  );
};

export default ChangePasswordModal;
