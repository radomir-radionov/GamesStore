import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthSelector } from "redux/userActivity/selectors";

const ProtectedPage = () => {
  const isAuth = useSelector(getAuthSelector);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedPage;
