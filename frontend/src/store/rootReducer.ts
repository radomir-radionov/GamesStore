import userSlice from "redux/User/UserSlice";
import gamesSlice from "redux/Games/GamesSlice";
import modalWindowSlice from "redux/modalWindow/ModalWindowSlice";

const rootReducer = {
  user: userSlice,
  games: gamesSlice,
  modal: modalWindowSlice,
};

export default rootReducer;
