import { pageRoutes } from "constants/pageRoutes";
import { useNavigate } from "react-router-dom";

export const useRedirectToProfile = () => {
  const navigate = useNavigate();
  return navigate(`${pageRoutes.PROFILE}`);
};
