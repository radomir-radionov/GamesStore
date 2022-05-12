import dataFormic from "constants/dataFormic";
import * as Yup from "yup";

export const initialValues = {
  password: "",
  passwordConfirmation: "",
};

export const validationSchema = Yup.object({
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
