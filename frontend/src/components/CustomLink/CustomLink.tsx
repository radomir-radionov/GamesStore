import { ReactNode, ReactPortal } from "react";
import { LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import { NavLink, TextNavLink } from "./styles";

interface ILinkProps extends LinkProps {
  children: ReactNode | ReactPortal;
  to: string;
  onClick?: () => void;
}

const CustomLink = ({ children, to, onClick }: ILinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink active={match} to={to} onClick={onClick}>
      <TextNavLink>{children}</TextNavLink>
    </NavLink>
  );
};

export default CustomLink;
