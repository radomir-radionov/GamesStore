import { useFormik } from "formik";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useDispatch, useSelector } from "react-redux";
import { editGame } from "redux/Games/GamesSlice";
import { getEditGameDataSelector } from "redux/Games/selectors";
import { closeModal, openModal } from "redux/modalWindow/ModalWindowSlice";
import { ages, checkboxOptionsPlatform } from "./data";
import {
  Body,
  BoxFields,
  BoxImage,
  CloseBtn,
  Field,
  Header,
  Input,
  ModalWindow,
  Title,
  TitleData,
  Image,
  Button,
  Footer,
  FieldFlex,
  Checkbox,
  Textarea,
  BoxTitle,
  Select,
  Option,
  Span,
  BoxInputs,
  BoxLabel,
  Label,
  BoxInput,
  BoxTextarea,
  BoxCheckbox,
} from "./styles";

const EditGameModal = () => {
  const dispatch = useDispatch();
  const currentGame = useSelector(getEditGameDataSelector);

  const onClickOpenDeleteModal = () => {
    dispatch(openModal({ type: MODAL_TYPES.DELETE_GAME_MODAL }));
  };

  const handlerModalClose = () => {
    dispatch(closeModal());
  };

  const formikChangeNameConfig = {
    initialValues: {
      id: currentGame._id,
      name: currentGame.name,
      genre: currentGame.genre,
      price: currentGame.price,
      image: currentGame.image,
      description: currentGame.description,
      age: currentGame.age,
      platform: [],
    },
  };

  const formik = useFormik({
    ...formikChangeNameConfig,
    onSubmit: () => {
      const newGameData = {
        _id: currentGame._id,
        name: formik.values.name,
        genre: formik.values.genre,
        description: formik.values.description,
        price: formik.values.price,
        image: formik.values.image,
        platform: formik.values.platform,
        age: formik.values.age,
      };
      dispatch(editGame(newGameData));
      window.location.reload();
    },
  });

  const dataForm = [
    {
      id: 1,
      title: "Name",
      type: "text",
      name: "name",
      value: formik.values.name,
    },
    {
      id: 2,
      title: "Category",
      type: "text",
      name: "genre",
      value: formik.values.genre,
    },
    {
      id: 3,
      title: "Price",
      type: "number",
      name: "price",
      value: formik.values.price,
    },
    {
      id: 4,
      title: "Image",
      type: "text",
      name: "image",
      value: formik.values.image,
    },
  ];

  return (
    <ModalWindow onSubmit={formik.handleSubmit}>
      <Header>
        <Title>Edit Card</Title>
        <CloseBtn type="button" onClick={handlerModalClose}>
          <Span> &times;</Span>
        </CloseBtn>
      </Header>
      <Body>
        <BoxImage>
          <TitleData>Card Image</TitleData>
          {currentGame?.image && <Image image={currentGame?.image} />}
        </BoxImage>
        <BoxFields>
          <TitleData>Information</TitleData>
          <BoxInputs>
            {dataForm.map((data) => (
              <Field key={data.id}>
                <BoxLabel>
                  <Label htmlFor={data.name}>{data.name}</Label>
                </BoxLabel>
                <BoxInput>
                  <Input
                    type={data.type}
                    name={data.name}
                    value={data.value}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </BoxInput>
              </Field>
            ))}
            <Field>
              <BoxTitle>
                <Span>Description</Span>
              </BoxTitle>
              <BoxTextarea>
                <Textarea
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows={8}
                  cols={23}
                />
              </BoxTextarea>
            </Field>
            <FieldFlex>
              <Span>Age</Span>
              <Select
                name="age"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {ages.map((item) => (
                  <Option key={item} value={item} label={`${item}+`} />
                ))}
              </Select>
            </FieldFlex>
            <BoxCheckbox>
              <BoxTitle>
                <TitleData>Platform</TitleData>
              </BoxTitle>
              {checkboxOptionsPlatform.map((option) => (
                <FieldFlex key={option.key}>
                  <Span>{option.value} </Span>
                  <Checkbox
                    type="checkbox"
                    name="platform"
                    value={option.value}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </FieldFlex>
              ))}
            </BoxCheckbox>
          </BoxInputs>
        </BoxFields>
      </Body>
      <Footer>
        <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>
          Submit
        </Button>
        <Button type="button" onClick={onClickOpenDeleteModal}>
          Delete card
        </Button>
      </Footer>
    </ModalWindow>
  );
};

export default EditGameModal;
