import { object, string } from 'yup';

export const contactSchema = object({
  name: string().required('Name is required'),
  email: string()
    .email('Email must be a valid email')
    .required('Email is required'),
  phone: string().matches(
    /^\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.●]?([0-9]{4})$/,
    'Phone number is invalid'
  ),
  company: string(),
  website: string().url('Website must be a valid URL'),
  message: string(),
});
