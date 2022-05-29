import { Footer, Header } from "modules";
import {
  ChangeUserDataModal,
  ShowErrorModal,
} from "modules/ModalWindow/Modals";
import { useSelector } from "react-redux";
import {
  getCurrentUserDataSelector,
  getErrorSelector,
} from "redux/User/selectors";
import { Section, Title, Body, BoxTitle, CardProfile } from "./styles";

const ProfilePage = () => {
  const user = useSelector(getCurrentUserDataSelector);
  const errorData = useSelector(getErrorSelector);

  return (
    <>
      <Header />
      {errorData.isError && <ShowErrorModal />}
      <Section>
        <CardProfile>
          <BoxTitle>
            <Title>{user.name} profile page</Title>
          </BoxTitle>
          <Body>
            <ChangeUserDataModal />
          </Body>
        </CardProfile>
      </Section>
      <Footer />
    </>
  );
};

export default ProfilePage;
