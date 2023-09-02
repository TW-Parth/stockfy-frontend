import * as Yup from 'yup';

const SignupSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Email is not valid').required('Email is required'),
  password: Yup.string().min(8, 'Password should be of minimum 8 characters').max(25, 'Password should be of maximum 25 characters').required('Password is required'),
  gstNumber: Yup.string().required('GST Number is required'),
  eCommerceName: Yup.string().required('E-Commerce Name is required'),
  eCommerceWebsite: Yup.string().url().trim().required('E-Commerce Website is required'),
  phoneNumber: Yup.string().length(10, 'Phone number should be of 10 characters').required('Phone number is required'),
});

export default SignupSchema;
