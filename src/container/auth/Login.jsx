import { useFormik } from "formik";
import LoginSchema from "../../validationSchema/LoginSchema";
import TextField from "../../component/Input/TextField";
import PasswordField from "../../component/Input/PasswordField";
import { Link } from "react-router-dom";
import { login } from "../../services/auth/login.services";

const Login = () => {
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        const res = await login(values);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="Login-Container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 col-lg-4">
            <div className="card p-3">
              <h3 className="mb-3 text-center">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <TextField
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    error={Boolean(touched.email && errors.email)}
                    errorMessage={errors.email}
                  />
                </div>

                <div className="form-group">
                  <PasswordField
                    label="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    error={Boolean(touched.password && errors.password)}
                    errorMessage={errors.password}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 mb-2"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                <Link className="btn btn-secondary w-100" to={"/signup"}>
                  Signup
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
