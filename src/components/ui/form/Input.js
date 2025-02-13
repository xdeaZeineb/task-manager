import { Field } from "formik";

const InputControl = ({ name, placeholder, required }) => {
  return (
    <Field
      type="text"
      name={name}
      className="border border-progress rounded px-3 py-2  focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder={placeholder}
      required={required}
    />
  );
};
export default InputControl;
