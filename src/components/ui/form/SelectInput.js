import { Field } from "formik";

const SelectInput = ({ name }) => {
  const options = [
    { name: "Pending", value: "pending" },
    { name: "In Progress", value: "in progress" },
    { name: "Completed", value: "complete" },
  ];
  return (
    <Field
      as="select"
      name={name}
      className="border border-progress rounded px-3 py-2  focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {options.map((option) => {
        return <option value={option.value}>{option.name}</option>;
      })}
    </Field>
  );
};

export default SelectInput;
