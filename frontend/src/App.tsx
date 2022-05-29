import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginDataRequest } from "redux/User/UserSlice";
import AppRouter from "./routes/AppRouter";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isUser = localStorage.getItem("user");
    if (isUser) {
      const searchedUser = JSON.parse(isUser);
      dispatch(loginDataRequest(searchedUser));
    }
  }, [dispatch]);

  return <AppRouter />;
}

export default App;
