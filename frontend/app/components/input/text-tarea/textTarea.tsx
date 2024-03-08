import { CustomInputProps } from "@/interfaces/input";

export const CustomTextarea: React.FC<CustomInputProps> = ({
  formik,
  id,
  name,
  placeholder,
}) => (
  <div>
    <textarea
      id={id}
      name={name}
      placeholder={`${placeholder} *`}
      className="input input-bordered w-full h-32"
      required
      value={formik.values[name]}
      onChange={formik.handleChange}
    />
    {formik.touched[name] && formik.errors[name] && (
      <div className="text-red-500">{formik.errors[name]}</div>
    )}
  </div>
);
