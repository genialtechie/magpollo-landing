import { string, number, object } from 'yup';

export const carSchema = object({
  make: string(),
  model: string(),
  year: number().positive().integer(),
  vin: string().length(17),
  mileage: number().positive('Please enter mileage').integer(),
  plate: string().length(7),
});
