import * as Yup from "yup";

const LoginSchema = Yup.object({
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters")
    .max(25, "Password should be of maximum 25 characters")
    .required("Password is required"),
});

export default LoginSchema;
