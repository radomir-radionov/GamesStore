import { ReactNode } from "react";
import { Link, LinkProps, PathMatch, To } from "react-router-dom";
import styled from "styled-components";

interface ILinkProps extends LinkProps {
  children: ReactNode;
  active: PathMatch<string> | null;
  to: To;
}

export const NavLink = styled(Link)<ILinkProps>`
  padding: 21px 15px 15px 15px;
  border-bottom: ${({ active }) =>
    active ? "6px solid #059862" : "6px solid black"};
  color: #f2f2f2;
  text-decoration: none;

  &:hover {
    box-sizing: border-box;
    background-color: #272727;
    border-bottom: 6px solid #9933cc;
  }
`;

export const TextNavLink = styled.span`
  text-align: center;
`;
