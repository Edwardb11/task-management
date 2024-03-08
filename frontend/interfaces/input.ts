import { FormikHandlers, FormikValues } from "formik";

export interface CustomInputProps {
  formik: formik;
  id: string;
  name: string;
  placeholder: string;
}

export interface CustomSelectProps {
  formik: formik;
  options: { value: string; label: string }[];
  id: string;
  name: string;
}

interface formik {
  values: FormikValues;
  handleChange: FormikHandlers["handleChange"];
  touched: FormikValues;
  errors: FormikValues;
}
