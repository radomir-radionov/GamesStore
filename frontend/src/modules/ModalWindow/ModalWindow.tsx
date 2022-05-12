import { useSelector } from "react-redux";
import {
  isModalOpenSelector,
  modalTypeSelector,
} from "redux/modalWindow/selectors";
import { MODALS_MAPPING } from "./modalTypes";
import { StyledModalWindow } from "./styles";

const ModalWindow = () => {
  const isOpenModal: boolean = useSelector(isModalOpenSelector);
  const modalType: string = useSelector(modalTypeSelector);
  const ModalContent = MODALS_MAPPING[modalType];

  return (
    <>
      {isOpenModal && (
        <StyledModalWindow>
          <ModalContent />
        </StyledModalWindow>
      )}
    </>
  );
};

export default ModalWindow;
