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
      gstNumber: "",
      eCommerceName: "",
      eCommerceWebsite: "",
      phoneNumber: "",
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
          <div className="col-md-8 col-lg-8">
            <div className="card p-3">
              <h3 className="mb-3 text-center">Signup</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <TextField
                        id="firstName"
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
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <TextField
                        id="lastName"
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
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <TextField
                        id="email"
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
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <PasswordField
                        id="password"
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
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <TextField
                        id="gstNumber"
                        label="GST No."
                        name="gstNumber"
                        value={values.gstNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        error={Boolean(touched.gstNumber && errors.gstNumber)}
                        errorMessage={errors.gstNumber}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <TextField
                        id="eCommerceName"
                        label="E-Commerce Name"
                        name="eCommerceName"
                        value={values.eCommerceName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        error={Boolean(
                          touched.eCommerceName && errors.eCommerceName
                        )}
                        errorMessage={errors.eCommerceName}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <TextField
                        id="eCommerceWebsite"
                        label="E-Commerce Website"
                        name="eCommerceWebsite"
                        value={values.eCommerceWebsite}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        error={Boolean(
                          touched.eCommerceWebsite && errors.eCommerceWebsite
                        )}
                        errorMessage={errors.eCommerceWebsite}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <TextField
                        id="phoneNumber"
                        label="Phone Number"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        error={Boolean(
                          touched.phoneNumber && errors.phoneNumber
                        )}
                        errorMessage={errors.phoneNumber}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <button
                      className="btn btn-primary w-100 mb-2"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <Link className="btn btn-secondary w-100" to={"/login"}>
                      Login
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
