import { Formik } from "formik";
import { initialValues, validationSchema } from "./FormicConfig";
import FormikControl from "../../formikControl";
import { Button, ButtonsBox, StyledForm } from "./styles";
import { useDispatch } from "react-redux";
import { openModal } from "redux/modalWindow/ModalWindowSlice";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { userChangeNameData } from "redux/User/UserSlice";

interface INameValue {
  name: string;
}

const ChangeUserDataModal = () => {
  const dispatch = useDispatch();
  const onSubmit = (values: INameValue) => {
    dispatch(userChangeNameData(values));
  };

  const onClickOpenChangePasswordModal = () => {
    dispatch(openModal({ type: MODAL_TYPES.CHANGE_PASSOWRD_MODAL }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <StyledForm>
        <FormikControl
          type="text"
          name="name"
          control="input"
          label="Username"
        />
        <ButtonsBox>
          <Button type="submit">Save Profile</Button>
          <Button type="button" onClick={onClickOpenChangePasswordModal}>
            Change Password
          </Button>
        </ButtonsBox>
      </StyledForm>
    </Formik>
  );
};

export default ChangeUserDataModal;
