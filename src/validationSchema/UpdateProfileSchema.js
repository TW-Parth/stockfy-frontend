import * as Yup from 'yup';

const UpdateProfileSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  eCommerceName: Yup.string().required('E-Commerce Name is required'),
  eCommerceWebsite: Yup.string().url().trim().required('E-Commerce Website is required'),
  phoneNumber: Yup.string().length(10, 'Phone number should be of 10 characters').required('Phone number is required'),
});

export default UpdateProfileSchema;
