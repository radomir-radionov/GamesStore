import styled from "styled-components";

interface ComponentClickedProps {
  clicked: boolean;
}

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
    background-color: ${(props) => (props.clicked ? "transparent" : "white")};
    width: 35px;
    height: 2px;
    display: inline-block;
    margin-top: 1.5rem;
    transition: all 0.3s;
    &::before,
    &::after {
      content: "";
      background-color: white;
      width: 35px;
      height: 2px;
      display: inline-block;
      position: absolute;
      left: 0;
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

export const Navigation = styled.nav<ComponentClickedProps>`
  display: flex;

  @media (max-width: 805px) {
    position: absolute;
    top: 60px;
    justify-content: center;
    flex-wrap: wrap;
    width: ${(props) => (props.clicked ? "100%" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};
    background-color: black;
    z-index: 6;
  }
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  flex-direction: column;
  background-color: black;
  z-index: 1;
`;

export const DropDown = styled.div`
  color: white;
  position: relative;

  &:hover ${DropDownContent} {
    display: flex;
    flex-direction: column;
  }
`;

export const Dropbtn = styled.div`
  padding: 21px 15px 15px 15px;
  border-bottom: 6px solid black;
  cursor: pointer;

  &:hover {
    border-bottom: 6px solid #9933cc;
  }

  &:active {
    border-bottom: 6px solid #059862;
  }
`;

export const Img = styled.img`
  margin: 0 10px 0 10px;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
