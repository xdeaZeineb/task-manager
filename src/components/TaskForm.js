import { Form, Formik } from "formik";
import InputControl from "./ui/form/Input";
import SelectInput from "./ui/form/SelectInput";

const TaskForm = ({ initialValues, title, onSubmit, closeModal }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      enableReinitialize
    >
      {({ resetForm }) => (
        <Form autoComplete="off" className="flex items-center gap-3">
          <InputControl name="title" placeholder="Title" required />
          <InputControl name="description" placeholder="Description" required />
          <SelectInput name="stage" />
          <button
            type="submit"
            className="bg-primary hover:bg-[#F19AA1] px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pending text-background"
          >
            {title}
          </button>
          {title === "Add Task" ? (
            <button
              type="button"
              className="bg-secondary hover:bg-[#89bae6] px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-progress text-background"
              onClick={() => resetForm()}
            >
              Reset
            </button>
          ) : (
            <button
              type="button"
              className="bg-secondary hover:bg-[#89bae6] px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-progress text-background"
              onClick={() => closeModal(false)}
            >
              Cancel
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;
