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
            <Span>&times;</Span>
          </CloseBtn>
        </Header>
        <Body>
          {dataForm.map((data) => (
            <FormikControl
              key={data.value}
              type="text"
              control="input"
              label={data.title}
              name={data.value}
            />
          ))}
          <FormikControl
            type="text"
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl type="text" control="select" label="Age" name="age" />
          <FormikControl
            type="text"
            control="checkbox"
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
