import { Formik } from "formik";
import FormikControl from "modules/ModalWindow/formikControl";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useDispatch, useSelector } from "react-redux";
import { editGame } from "redux/Games/GamesSlice";
import { getEditGameDataSelector } from "redux/Games/selectors";
import { closeModal, openModal } from "redux/modalWindow/ModalWindowSlice";
import { dataForm } from "./data";
import {
  Body,
  BoxFields,
  BoxImage,
  CloseBtn,
  Header,
  Title,
  Image,
  Button,
  Footer,
  Span,
  StyledForm,
} from "./styles";

const EditGameModal = () => {
  const dispatch = useDispatch();
  const currentGame = useSelector(getEditGameDataSelector);

  const onClickOpenDeleteModal = () => {
    dispatch(openModal({ type: MODAL_TYPES.DELETE_GAME_MODAL }));
  };

  const onClickCloseModal = () => {
    dispatch(closeModal());
  };

  const currentGameValues = {
    id: currentGame._id,
    name: currentGame.name,
    genre: currentGame.genre,
    price: currentGame.price,
    image: currentGame.image,
    description: currentGame.description,
    age: currentGame.age,
    platform: [],
  };

  const onSubmit = (values: any) => {
    const newGameData = {
      _id: currentGame._id,
      name: values.name,
      genre: values.genre,
      description: values.description,
      price: values.price,
      image: values.image,
      platform: values.platform,
      age: values.age,
    };
    dispatch(editGame(newGameData));
    window.location.reload();
  };

  return (
    <Formik initialValues={currentGameValues} onSubmit={onSubmit}>
      <StyledForm>
        <Header>
          <Title>Edit game</Title>
          <CloseBtn type="button" onClick={onClickCloseModal}>
            <Span>&times;</Span>
          </CloseBtn>
        </Header>
        <Body>
          <BoxImage>
            {currentGame?.image && <Image image={currentGame?.image} />}
          </BoxImage>
          <BoxFields>
            {dataForm.map((data) => (
              <FormikControl
                key={data.name}
                type={data.type}
                control={data.control}
                label={data.label}
                name={data.name}
              />
            ))}
          </BoxFields>
        </Body>
        <Footer>
          <Button type="submit">Submit</Button>
          <Button type="submit" onClick={onClickOpenDeleteModal}>
            Delete card
          </Button>
        </Footer>
      </StyledForm>
    </Formik>
  );
};

export default EditGameModal;
