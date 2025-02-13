import { useTaskContext } from "@/contexts/taskContext";
import TaskForm from "./TaskForm";

const DeleteTask = ({ task, closeModal }) => {
  const { dispatch } = useTaskContext();

  const handleDelete = async () => {
    try {
      dispatch({ type: "DELETE_TASK", payload: task.id });

      closeModal(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-background ">
      <h2 className="text-2xl font-extrabold text-text mb-2">Delete task</h2>
      <p className="mb-4 text-center">
        Are you sure you want to delete this task?
      </p>
      <div className="flex justify-center gap-2">
        <button
          className="bg-primary hover:bg-[#F19AA1] px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pending text-background"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="bg-secondary hover:bg-[#89bae6] px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-progress text-background"
          onClick={() => closeModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteTask;
