import { useState } from "react";
import { products } from "constants/products";
import { Button, CustomLink } from "components";
import { useDispatch, useSelector } from "react-redux";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { openModal } from "redux/modalWindow/ModalWindowSlice";
import {
  getAuthSelector,
  getCurrentUserDataSelector,
} from "redux/userActivity/selectors";
import { CartIcon, ExitIcon, ProfileIcon } from "assets";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "redux/userActivity/UserActivitySlice";
import { getGamesInCartSelector } from "redux/Games/selectors";
import { IGameData } from "types";
import { pageRoutes } from "constants/pageRoutes";
import {
  Dropbtn,
  DropDown,
  DropDownContent,
  Icon,
  Img,
  MenuLabel,
  Navigation,
  TextBox,
} from "./styles";

const HumburgerMenu = () => {
  const dispatch = useDispatch();
  const cartGames: IGameData[] = useSelector(getGamesInCartSelector);
  const user = useSelector(getCurrentUserDataSelector);
  const isAuth = useSelector(getAuthSelector);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const onHandleClick = () => {
    setClick(!click);
  };

  const onClickOpenPageHandler = () => {
    if (!isAuth) {
      dispatch(openModal({ type: MODAL_TYPES.SIGN_IN_MODAL }));
    }
  };

  const onClickOpenSignUpModal = () => {
    dispatch(openModal({ type: MODAL_TYPES.SIGN_UP_MODAL }));
  };

  const onClickOpenSignInModal = () => {
    dispatch(openModal({ type: MODAL_TYPES.SIGN_IN_MODAL }));
  };

  const onClickLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("gamesInCart");
    dispatch(logout());
    navigate(`${pageRoutes.HOME}`);
  };

  return (
    <>
      <MenuLabel onClick={onHandleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <Navigation clicked={click}>
        <CustomLink to={pageRoutes.HOME}>Home</CustomLink>
        <CustomLink to={pageRoutes.ABOUT} onClick={onClickOpenPageHandler}>
          About
        </CustomLink>
        <DropDown>
          <Dropbtn>Products &#x21e9;</Dropbtn>
          <DropDownContent>
            {products.map((product) => (
              <CustomLink
                key={product.id}
                to={`/products/${product.href}`}
                onClick={onClickOpenPageHandler}
              >
                {product.name}
              </CustomLink>
            ))}
          </DropDownContent>
        </DropDown>
        {(!isAuth && (
          <>
            <Button text="Sign In" onClick={onClickOpenSignInModal} />
            <Button text="Sign Up" onClick={onClickOpenSignUpModal} />
          </>
        )) || (
          <>
            <CustomLink to={pageRoutes.PROFILE}>
              <TextBox>
                <Img src={ProfileIcon} alt="profileIcon" />
                {user.name}
              </TextBox>
            </CustomLink>
            <CustomLink to={pageRoutes.CART}>
              <TextBox>
                <Img src={CartIcon} alt="cartIcon" />
                {cartGames.length}
              </TextBox>
            </CustomLink>
            <CustomLink to="logout" onClick={onClickLogout}>
              <Img src={ExitIcon} alt="exitIcon" />
            </CustomLink>
          </>
        )}
        <Outlet />
      </Navigation>
    </>
  );
};

export default HumburgerMenu;
