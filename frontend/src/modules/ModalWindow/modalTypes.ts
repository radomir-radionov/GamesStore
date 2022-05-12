import {
  SignInModal,
  SignUpModal,
  ChangePasswordModal,
  ChangeUserDataModal,
  AddGameModal,
  DeleteGameModal,
  EditGameModal,
  BuyGameModal,
  ShowErrorModal,
} from "./Modals";

interface IModalTypes {
  SIGN_IN_MODAL: string;
  SIGN_UP_MODAL: string;
  CHANGE_PASSOWRD_MODAL: string;
  CHANGE_USER_DATA_MODAL: string;
  BUY_GAME_MODAL: string;
  ADD_GAME_MODAL: string;
  DELETE_GAME_MODAL: string;
  EDIT_GAME_MODAL: string;
  SHOW_ERROR_MODAL: string;
}

export const MODAL_TYPES: IModalTypes = {
  SIGN_IN_MODAL: "SIGN_IN_MODAL",
  SIGN_UP_MODAL: "SIGN_UP_MODAL",
  CHANGE_PASSOWRD_MODAL: "CHANGE_PASSOWRD_MODAL",
  CHANGE_USER_DATA_MODAL: "CHANGE_USER_DATA_MODAL",
  BUY_GAME_MODAL: "BUY_GAME_MODAL",
  ADD_GAME_MODAL: "ADD_GAME_MODAL",
  DELETE_GAME_MODAL: "DELETE_GAME_MODAL",
  EDIT_GAME_MODAL: "EDIT_GAME_MODAL",
  SHOW_ERROR_MODAL: "SHOW_ERROR_MODAL",
};

export const MODALS_MAPPING = {
  [MODAL_TYPES.SIGN_IN_MODAL]: SignInModal,
  [MODAL_TYPES.SIGN_UP_MODAL]: SignUpModal,
  [MODAL_TYPES.CHANGE_PASSOWRD_MODAL]: ChangePasswordModal,
  [MODAL_TYPES.CHANGE_USER_DATA_MODAL]: ChangeUserDataModal,
  [MODAL_TYPES.BUY_GAME_MODAL]: BuyGameModal,
  [MODAL_TYPES.ADD_GAME_MODAL]: AddGameModal,
  [MODAL_TYPES.DELETE_GAME_MODAL]: DeleteGameModal,
  [MODAL_TYPES.EDIT_GAME_MODAL]: EditGameModal,
  [MODAL_TYPES.SHOW_ERROR_MODAL]: ShowErrorModal,
};
