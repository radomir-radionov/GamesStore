import dataFormic from "constants/dataFormic";
import * as Yup from "yup";

const lowerCaseRegex = /(?=.*[a-z])/;
const upperCaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

export const validationSchema = Yup.object({
  name: Yup.string()
    .matches(lowerCaseRegex, dataFormic.testLowerCase)
    .matches(upperCaseRegex, dataFormic.textUpperCase)
    .matches(numericRegex, dataFormic.numberQuantity)
    .min(4, dataFormic.minCharacters)
    .max(10, dataFormic.maxCharacters)
    .required(dataFormic.required),
});

export const initialValues = {
  name: "",
};
