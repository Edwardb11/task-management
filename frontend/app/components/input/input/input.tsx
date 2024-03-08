import { CustomInputProps } from "@/interfaces/input";


export const CustomInput: React.FC<CustomInputProps> = ({
  formik,
  id,
  name,
  placeholder,
}) => (
  <div>
    <input
      id={id}
      name={name}
      type="text"
      placeholder={`${placeholder} *`}
      className="input input-bordered w-full"
      value={formik.values[name]}
      onChange={formik.handleChange}
      required
    />
    {formik.touched[name] && formik.errors[name] && (
      <div className="text-red-500">{formik.errors[name]}</div>
    )}
  </div>
);
