import { Footer, Header } from "modules";
import {
  ChangeUserDataModal,
  ShowErrorModal,
} from "modules/ModalWindow/Modals";
import { useSelector } from "react-redux";
import {
  getCurrentUserDataSelector,
  getErrorSelector,
} from "redux/userActivity/selectors";
import {
  Wrapper,
  Container,
  Title,
  Body,
  BoxTitle,
  CardProfile,
} from "./styles";

const ProfilePage = () => {
  const user = useSelector(getCurrentUserDataSelector);
  const errorData = useSelector(getErrorSelector);

  return (
    <Wrapper>
      <Header />
      {errorData.isError && <ShowErrorModal />}
      <Container>
        <CardProfile>
          <BoxTitle>
            <Title>{user.name} profile page</Title>
          </BoxTitle>
          <Body>
            <ChangeUserDataModal />
          </Body>
        </CardProfile>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default ProfilePage;
