import { ReactNode } from "react";
import { Link, LinkProps, PathMatch, To } from "react-router-dom";
import styled from "styled-components";

interface ILinkProps extends LinkProps {
  children: ReactNode;
  active: PathMatch<string> | null;
  to: To;
}

export const NavLink = styled(Link)<ILinkProps>`
  font-size: ${({ active }) => (active ? "20px" : null)};
  color: ${({ active }) => (active ? "wheat" : "white")};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #f6be00;
  }
`;
