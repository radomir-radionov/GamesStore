import modalWindowSlice from "redux/modalWindow/ModalWindowSlice";
import signUpSlice from "redux/userActivity/UserActivitySlice";
import gamesSlice from "redux/Games/GamesSlice";

const rootReducer = {
  modal: modalWindowSlice,
  games: gamesSlice,
  user: signUpSlice,
};

export default rootReducer;
