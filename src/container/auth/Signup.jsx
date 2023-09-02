import { useFormik } from "formik";
import TextField from "../../component/Input/TextField";
import PasswordField from "../../component/Input/PasswordField";
import { Link } from "react-router-dom";
import SignupSchema from "../../validationSchema/SignupSchema";

const Signup = () => {
  const form = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      try {
        console.log(values, "values");
      } catch (err) {
        console.log(err);
      }
    },
  });

  const {
    values,
    touched,
    handleChange,
    handleBlur,
    errors,
    isSubmitting,
    handleSubmit,
  } = form;

  return (
    <div className="Login-Container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 col-lg-4">
            <div className="card p-3">
              <h3 className="mb-3 text-center">Signup</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    error={Boolean(touched.firstName && errors.firstName)}
                    errorMessage={errors.firstName}
                  />
                </div>

                <div className="form-group">
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    error={Boolean(touched.lastName && errors.lastName)}
                    errorMessage={errors.lastName}
                  />
                </div>

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
                <Link className="btn btn-secondary w-100" to={"/login"}>
                  Login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
