import { useDispatch, useSelector } from "react-redux";
import { deleteGame } from "redux/Games/GamesSlice";
import { getEditGameDataSelector } from "redux/Games/selectors";
import { closeModal } from "redux/modalWindow/ModalWindowSlice";
import {
  Body,
  CloseBtn,
  Footer,
  Header,
  Modal,
  Name,
  Button,
  Span,
  Title,
  Text,
} from "./styles";

const DeleteGameModal = () => {
  const dispatch = useDispatch();
  const currentGame = useSelector(getEditGameDataSelector);

  const onClickSubmitDeleteGameModal = () => {
    dispatch(deleteGame());
    window.location.reload();
  };

  const onClickCloseDeleteGameModal = () => {
    dispatch(closeModal());
  };

  return (
    <Modal>
      <Header>
        <Title>Delete Card</Title>
        <CloseBtn type="button" onClick={onClickCloseDeleteGameModal}>
          <Span>&times;</Span>
        </CloseBtn>
      </Header>
      <Body>
        <Text>
          Are you sure you want to delete the product
          <Name> {currentGame?.name}</Name>?
        </Text>
      </Body>
      <Footer>
        <Button onClick={onClickSubmitDeleteGameModal}>Yes</Button>
        <Button onClick={onClickCloseDeleteGameModal}>No</Button>
      </Footer>
    </Modal>
  );
};

export default DeleteGameModal;
