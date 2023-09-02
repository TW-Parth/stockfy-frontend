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
            gstNumber: '',
            eCommerceName: '',
            eCommerceWebsite: '',
            phoneNumber: '',
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
            <TextField id='firstName' label='First Name' name='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.firstName && errors.firstName)} errorMessage={errors.firstName}/>
            <TextField id='lastName' label='Last Name' name='lastName' value={values.lastName} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.lastName && errors.lastName)} errorMessage={errors.lastName}/>
            <TextField id='email' label='Email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.email && errors.email)} errorMessage={errors.email}/>
            <PasswordField id='password' label='Password' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.password && errors.password)} errorMessage={errors.password}/>
            <TextField id='gstNumber' label='GST No.' name='gstNumber' value={values.gstNumber} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.gstNumber && errors.gstNumber)} errorMessage={errors.gstNumber}/>
            <TextField id='eCommerceName' label='E-Commerce Name' name='eCommerceName' value={values.eCommerceName} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.eCommerceName && errors.eCommerceName)} errorMessage={errors.eCommerceName}/>
            <TextField id='eCommerceWebsite' label='E-Commerce Website' name='eCommerceWebsite' value={values.eCommerceWebsite} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.eCommerceWebsite && errors.eCommerceWebsite)} errorMessage={errors.eCommerceWebsite}/>
            <TextField id='phoneNumber' label='Phone Number' name='phoneNumber' value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} disabled={isSubmitting} error={Boolean(touched.phoneNumber && errors.phoneNumber)} errorMessage={errors.phoneNumber}/>
            <button type="submit" disabled={isSubmitting}>Submit</button>
            <Link to={'/login'}>Login</Link>
        </form>
    </div>
    );
}

export default Signup;