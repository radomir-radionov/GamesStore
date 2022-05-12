import dataFormic from "constants/dataFormic";
import * as Yup from "yup";

const lowerCaseRegex = /(?=.*[a-z])/;
const upperCaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

export const validationSchema = Yup.object({
  email: Yup.string()
    .email(dataFormic.emailExample)
    .required(dataFormic.required),
  name: Yup.string()
    .matches(lowerCaseRegex, dataFormic.testLowerCase)
    .matches(upperCaseRegex, dataFormic.textUpperCase)
    .matches(numericRegex, dataFormic.numberQuantity)
    .min(4, dataFormic.minCharacters)
    .max(10, dataFormic.maxCharacters)
    .required(dataFormic.required),
  password: Yup.string()
    .min(4, dataFormic.minCharacters)
    .max(10, dataFormic.maxCharacters)
    .required(dataFormic.required),
  passwordConfirmation: Yup.string()
    .required(dataFormic.required)
    .when("password", {
      is: (val: string) => !!(val && val.length > 0),
      then: Yup.string().oneOf([Yup.ref("password")], dataFormic.samePassword),
    }),
});

export const initialValues = {
  email: "",
  name: "",
  password: "",
  passwordConfirmation: "",
};
