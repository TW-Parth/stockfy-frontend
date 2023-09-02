import { useFormik } from "formik";
import TextField from "../../component/Input/TextField";
import PasswordField from "../../component/Input/PasswordField";
import { Link } from "react-router-dom";
import SignupSchema from "../../validationSchema/SignupSchema";

const Signup = () => {
    
    const form = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: SignupSchema,
        onSubmit: async (values) => {
            try {
                console.log(values, 'values');
            }
            catch(err) {
                console.log(err);
            }
        }
    })

    const {values, touched, handleChange, handleBlur, errors, isSubmitting, handleSubmit} = form;
    
    return(
    <div className="Login-Container">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <TextField label='First Name' name='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.firstName && errors.firstName)} errorMessage={errors.firstName}/>
            <TextField label='Last Name' name='lastName' value={values.lastName} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.lastName && errors.lastName)} errorMessage={errors.lastName}/>
            <TextField label='Email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.email && errors.email)} errorMessage={errors.email}/>
            <PasswordField label='Password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.password && errors.password)} errorMessage={errors.password}/>
            <button type="submit" disabled={isSubmitting}>Submit</button>
            <Link to={'/login'}>Login</Link>
        </form>
    </div>
    );
}

export default Signup;