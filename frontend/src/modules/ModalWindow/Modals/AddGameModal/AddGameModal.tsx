import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { addNewGame } from "redux/Games/GamesSlice";
import { closeModal } from "redux/modalWindow/ModalWindowSlice";
import { INewGame } from "types";
import FormikControl from "../../formikControl";
import { dataForm } from "./data";
import { initialValues, validationSchema } from "./FormicConfig";
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

const AddGameModal = () => {
  const dispatch = useDispatch();

  const onSubmit = (values: INewGame) => {
    const newGame = {
      name: values.name,
      genre: values.genre,
      price: values.price,
      image: values.image,
      description: values.description,
      age: values.age,
      platform: values.platform,
    };
    dispatch(addNewGame(newGame));
    window.location.reload();
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
          <Title>Create card</Title>
          <CloseBtn type="button" onClick={onClickCloseModal}>
            <Span> &times;</Span>
          </CloseBtn>
        </Header>
        <Body>
          {dataForm.map((data) => (
            <FormikControl
              key={data.value}
              control="input"
              type="text"
              label={data.title}
              name={data.value}
            />
          ))}
          <FormikControl
            control="textarea"
            type="text"
            label="Description"
            name="description"
          />
          <FormikControl control="select" type="text" label="Age" name="age" />
          <FormikControl
            control="checkbox"
            type="text"
            label="Platform"
            name="platform"
          />
        </Body>
        <Footer>
          <Button type="submit">Create card</Button>
        </Footer>
      </StyledForm>
    </Formik>
  );
};

export default AddGameModal;
