import { serialize } from 'object-to-formdata';

export const convertJsonToFormData = (data) => {
  const formData = serialize(data, { indices: true });
  return formData;
};
