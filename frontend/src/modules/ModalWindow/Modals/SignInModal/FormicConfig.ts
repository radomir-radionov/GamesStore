import dataFormic from "constants/dataFormic";
import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email(dataFormic.emailExample)
    .required(dataFormic.required),
  password: Yup.string()
    .min(4, dataFormic.minCharacters)
    .max(10, dataFormic.maxCharacters)
    .required(dataFormic.required),
});

export const initialValues = {
  email: "",
  password: "",
};
