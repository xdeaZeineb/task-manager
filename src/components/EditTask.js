import { useTaskContext } from "@/contexts/taskContext";
import TaskForm from "./TaskForm";

const EditTask = ({ task, closeModal }) => {
  const initialValues = task;

  const { dispatch } = useTaskContext();

  const onSubmit = async (values) => {
    try {
      const payload = {
        id: initialValues.id,
        title: values.title,
        description: values.description,
        stage: values.stage,
      };
      dispatch({ type: "EDIT_TASK", payload });
      closeModal(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="p-4 bg-background shadow-md rounded-lg">
      <h2 className="text-2xl font-extrabold mb-4 text-text">Add a New Task</h2>
      <TaskForm
        initialValues={initialValues}
        title={"Edit Task"}
        onSubmit={onSubmit}
        closeModal={closeModal}
      />
    </div>
  );
};

export default EditTask;
