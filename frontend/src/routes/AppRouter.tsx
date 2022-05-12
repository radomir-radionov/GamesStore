import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { pageRoutes } from "constants/pageRoutes";
import {
  HomePage,
  AboutPage,
  CartPage,
  ProductPage,
  ProfilePage,
  ProtectedPage,
} from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pageRoutes.HOME} element={<HomePage />} />
        <Route element={<ProtectedPage />}>
          <Route path={pageRoutes.ABOUT} element={<AboutPage />} />
          <Route path={pageRoutes.CART} element={<CartPage />} />
          <Route path={pageRoutes.PRODUCT} element={<ProductPage />} />
          <Route path={pageRoutes.PROFILE} element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<Navigate to={pageRoutes.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
