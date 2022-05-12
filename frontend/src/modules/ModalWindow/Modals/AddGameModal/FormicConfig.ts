import dataFormic from "constants/dataFormic";
import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, dataFormic.minCharacters)
    .max(10, dataFormic.maxCharacters)
    .required(dataFormic.required),
  genre: Yup.string().required(dataFormic.required),
  price: Yup.number().required(dataFormic.required),
  image: Yup.string().required(dataFormic.required),
  description: Yup.string().required(dataFormic.required),
  age: Yup.string().required(dataFormic.required),
  platform: Yup.array().required(dataFormic.required),
});

export const initialValues = {
  name: "",
  genre: "",
  price: "",
  image: "",
  description: "",
  age: "",
  platform: [],
};
