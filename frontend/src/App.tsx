import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginDataRequest } from "redux/User/UserSlice";
import AppRouter from "./routes/AppRouter";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(loginDataRequest(foundUser));
    }
  }, [dispatch]);

  return <AppRouter />;
}

export default App;
