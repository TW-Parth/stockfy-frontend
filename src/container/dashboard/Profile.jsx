import { useFormik } from 'formik';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import TextField from '../../component/Input/TextField';
import { LOCAL_STORAGE_KEYS, SUCCESS_MESSAGE } from '../../helpers/constant';
import { getProfile, updateProfile } from '../../services/auth/auth.services';
import UpdateProfileSchema from '../../validationSchema/UpdateProfileSchema';

const Profile = () => {

  useEffect(() => {
    const getProfileData = async () => {
      const { data } = await getProfile();
      setValues({
        firstName: data?.user?.firstName,
        lastName: data?.user?.lastName,
        email: data?.user?.email,
        password: data?.user?.password,
        gstNumber: data?.user?.gstNumber,
        eCommerceName: data?.user?.eCommerceName,
        eCommerceWebsite: data?.user?.eCommerceWebsite,
        phoneNumber: data?.user?.phoneNumber,
      })
    }
    getProfileData();
  } , [])
  
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
    validationSchema: UpdateProfileSchema,
    onSubmit: async (values) => {
      try {
        let payload = {
          firstName : values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
          eCommerceName : values.eCommerceName,
          eCommerceWebsite : values.eCommerceWebsite
        }
        const { data } = await updateProfile(payload);
        localStorage.setItem(LOCAL_STORAGE_KEYS.USER , JSON.stringify(data?.user));
        toast.success(SUCCESS_MESSAGE.PROFILE_UPDATE);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const { values, touched, handleChange, handleBlur, errors, isSubmitting, handleSubmit, setValues } = form;

  return (
    <>
      <div className="Login-Container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-8">
              <div className="card p-3">
                <h3 className="mb-3 text-center">Profile</h3>
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
                          disabled={true}
                          error={Boolean(touched.email && errors.email)}
                          errorMessage={errors.email}
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
                          disabled={true}
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
                          error={Boolean(touched.eCommerceName && errors.eCommerceName)}
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
                          error={Boolean(touched.eCommerceWebsite && errors.eCommerceWebsite)}
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
                          error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                          errorMessage={errors.phoneNumber}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <button className="btn btn-primary w-100 mb-2" type="submit" disabled={isSubmitting}>
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
