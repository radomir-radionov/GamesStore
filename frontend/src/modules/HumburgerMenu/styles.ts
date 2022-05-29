import styled from "styled-components";

interface ComponentClickedProps {
  clicked: boolean;
}

export const ListItems = styled.ul`
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li`
  height: 100%;
  padding: 21px 15px 15px 15px;
  font-size: 17px;

  &:hover {
    border-bottom: 6px solid #9933cc;
  }

  &:active {
    border-bottom: 6px solid #059862;
  }
`;

export const MenuLabel = styled.label`
  @media (max-width: 805px) {
    position: absolute;
    right: 15px;
    top: 10px;
    z-index: 10;
    cursor: pointer;
  }
`;

export const Icon = styled.span<ComponentClickedProps>`
  @media (max-width: 805px) {
    position: relative;
    display: inline-block;
    width: 35px;
    height: 2px;
    margin-top: 1.5rem;
    background-color: ${(props) => (props.clicked ? "transparent" : "white")};
    transition: all 0.3s;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      display: inline-block;
      width: 35px;
      height: 2px;
      background-color: white;
      transition: all 0.3s;
    }
    &::before {
      top: ${(props) => (props.clicked ? "0" : "-10px")};
      transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }
    &::after {
      top: ${(props) => (props.clicked ? "0" : "10px")};
      transform: ${(props) =>
        props.clicked ? "rotate(-135deg)" : "rotate(0)"};
    }
  }
`;

export const Nav = styled.nav<ComponentClickedProps>`
  display: flex;
  margin-right: 17px;

  @media (max-width: 805px) {
    position: absolute;
    top: 60px;
    z-index: 6;
    justify-content: center;
    flex-wrap: wrap;
    width: ${(props) => (props.clicked ? "100%" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};
    background-color: black;
  }
`;

export const DropDownContent = styled.div`
  position: absolute;
  z-index: 1;
  display: none;
  flex-direction: column;
  background-color: black;
`;

export const DropDown = styled.div`
  position: relative;
  color: white;

  &:hover ${DropDownContent} {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
`;

export const Dropbtn = styled.div`
  cursor: pointer;
`;

export const Img = styled.img`
  margin-right: 10px;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSpan = styled.span`
  vertical-align: top;
`;
