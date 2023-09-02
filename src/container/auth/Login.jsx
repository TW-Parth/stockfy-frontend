import { useFormik } from "formik";
import LoginSchema from "../../validationSchema/LoginSchema";
import TextField from "../../component/Input/TextField";
import PasswordField from "../../component/Input/PasswordField";
import { Link } from "react-router-dom";
import { login } from '../../services/auth/login.services';

const Login = () => {

    const form = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            try {
                const res = await login(values);
                console.log(res)
            }
            catch(err) {
                console.log(err);
            }
        }
    })

    const {values, touched, handleChange, handleBlur, errors, isSubmitting, handleSubmit} = form;
    
    return(
    <div className="Login-Container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <TextField label='Email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.email && errors.email)} errorMessage={errors.email}/>
            <PasswordField label='Password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.password && errors.password)} errorMessage={errors.password} />
            <button type="submit" disabled={isSubmitting}>Submit</button>
            <Link to={'/signup'}>Signup</Link>
        </form>
    </div>
    );
}

export default Login;