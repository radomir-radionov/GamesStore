import styled from "styled-components";

export interface ICardImage {
  image: string;
}

export const ModalWindow = styled.form`
  padding: 0 30px 20px 30px;
  border-radius: 2rem;
  background-color: #121212;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  color: white;
`;

export const CloseBtn = styled.button`
  background: transparent;
  border: none;
  color: #808080;
  font-size: 50px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: red;
  }
`;

export const Body = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const BoxImage = styled.div`
  margin-right: 30px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const BoxFields = styled.div`
  width: 370px;

  @media (max-width: 700px) {
    width: 270px;
  }
`;

export const TitleData = styled.span`
  font-size: large;
  font-weight: bolder;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 15px 0;

  @media (max-width: 700px) {
    display: block;
  }
`;

export const Input = styled.input`
  padding: 6px 12px;
  margin-left: 40px;
  font-size: 14px;
  width: 270px;
  height: 35px;
  border: 2px solid #ccc;
  color: white;
  background-color: transparent;

  &:focus {
    outline: none;
    border: 2px solid red;
    color: white;
    background-color: transparent;
  }

  @media (max-width: 700px) {
    margin-left: 0px;
  }
`;

export const Image = styled.div<ICardImage>`
  height: 260px;
  width: 200px;
  margin-top: 15px;
  background-image: url(${({ image }) => image});
  background-size: cover;
`;

export const Button = styled.button`
  width: 180px;
  height: 45px;
  margin-bottom: 10px;
  font-size: large;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #562370;
  cursor: pointer;

  &:hover {
    background-color: red;
  }

  &:disabled {
    background-color: gray;
  }
`;

export const Footer = styled.footer`
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const FieldFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 15px 0;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

export const BoxTitle = styled.div`
  margin-bottom: 20px;
`;

export const Textarea = styled.textarea`
  width: 270px;
  height: 100px;
  padding: 5px;
  border: 2px solid #ccc;
  color: white;
  background-color: transparent;
  resize: none;
`;

export const Select = styled.select`
  color: black;
`;

export const Option = styled.option`
  color: black;
`;

export const Span = styled.span``;

export const BoxInputs = styled.div``;

export const BoxLabel = styled.div``;

export const BoxInput = styled.div``;

export const BoxTextarea = styled.div``;

export const BoxCheckbox = styled.div``;

export const Label = styled.label``;
