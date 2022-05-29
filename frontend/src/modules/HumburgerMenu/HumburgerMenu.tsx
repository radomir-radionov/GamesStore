import { useState } from "react";
import { products } from "constants/products";
import { Button, CustomLink } from "components";
import { useDispatch, useSelector } from "react-redux";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { openModal } from "redux/modalWindow/ModalWindowSlice";
import {
  getAuthSelector,
  getCurrentUserDataSelector,
} from "redux/User/selectors";
import { CartIcon, ExitIcon, ProfileIcon } from "assets";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "redux/User/UserSlice";
import { getGamesInCartSelector } from "redux/Games/selectors";
import { IGameData } from "types";
import { pageRoutes } from "constants/pageRoutes";
import {
  Dropbtn,
  DropDown,
  DropDownContent,
  Icon,
  Img,
  ListItem,
  ListItems,
  MenuLabel,
  Nav,
  StyledSpan,
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
      <Nav clicked={click}>
        <ListItems>
          <ListItem>
            <CustomLink to={pageRoutes.HOME}>Home</CustomLink>
          </ListItem>
          <ListItem>
            <CustomLink to={pageRoutes.ABOUT} onClick={onClickOpenPageHandler}>
              About
            </CustomLink>
          </ListItem>
          <ListItem>
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
          </ListItem>
          {(!isAuth && (
            <>
              <ListItem>
                <Button text="Sign In" onClick={onClickOpenSignInModal} />
              </ListItem>
              <ListItem>
                <Button text="Sign Up" onClick={onClickOpenSignUpModal} />
              </ListItem>
            </>
          )) || (
            <>
              <ListItem>
                <CustomLink to={pageRoutes.PROFILE}>
                  <Img src={ProfileIcon} alt="Profile icon" />
                  <StyledSpan>{user.name}</StyledSpan>
                </CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink to={pageRoutes.CART}>
                  <Img src={CartIcon} alt="Cart icon" />
                  <StyledSpan>{cartGames.length}</StyledSpan>
                </CustomLink>
              </ListItem>
              <ListItem>
                <CustomLink to="logout" onClick={onClickLogout}>
                  <Img src={ExitIcon} alt="Exit icon" />
                </CustomLink>
              </ListItem>
            </>
          )}
        </ListItems>
        <Outlet />
      </Nav>
    </>
  );
};

export default HumburgerMenu;
