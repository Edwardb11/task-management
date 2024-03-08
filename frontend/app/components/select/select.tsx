import { CustomSelectProps } from "@/interfaces/input";

const CustomSelect: React.FC<CustomSelectProps> = ({
  formik,
  options,
  id,
  name,
}) => {
  return (
    <div>
      <select
        id={id}
        name={name}
        className="input input-bordered w-full"
        onChange={formik.handleChange}
        required
        value={formik.values[name]}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-500">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default CustomSelect;
