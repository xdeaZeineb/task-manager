import { useTaskContext } from "@/contexts/taskContext";
import TaskForm from "./TaskForm";

const AddTask = () => {
  const { dispatch } = useTaskContext();

  const initialValues = { title: "", description: "", stage: "pending" };

  const onSubmit = async (values) => {
    try {
      dispatch({
        type: "ADD_TASK",
        payload: {
          id: Date.now(),
          title: values.title,
          description: values.description,
          stage: values.stage,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="p-4 bg-background shadow-md rounded-lg">
      <h2 className="text-2xl font-extrabold mb-4 text-text">Add a New Task</h2>
      <TaskForm
        initialValues={initialValues}
        title={"Add Task"}
        onSubmit={onSubmit}
        closeModal={() => {}}
      />
    </div>
  );
};

export default AddTask;
