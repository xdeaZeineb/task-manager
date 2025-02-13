import { createContext, useReducer, useContext, useEffect } from "react";

const TaskContext = createContext();

const initialState = {
  tasks: [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return { ...state, tasks: action.payload };
    case "ADD_TASK":
      const newStateAdd = { ...state, tasks: [...state.tasks, action.payload] };
      if (typeof window !== "undefined") {
        localStorage.setItem("tasks", JSON.stringify(newStateAdd.tasks));
      }
      return newStateAdd;
    case "EDIT_TASK":
      const newStateEdit = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
      if (typeof window !== "undefined") {
        localStorage.setItem("tasks", JSON.stringify(newStateEdit.tasks));
      }
      return newStateEdit;
    case "DELETE_TASK":
      const newStateDelete = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
      if (typeof window !== "undefined") {
        localStorage.setItem("tasks", JSON.stringify(newStateDelete.tasks));
      }
      return newStateDelete;
    case "CHANGE_TASK_STAGE":
      const newStateChangeStage = {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, stage: action.payload.stage }
            : task
        ),
      };
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "tasks",
          JSON.stringify(newStateChangeStage.tasks)
        );
      }
      return newStateChangeStage;
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        dispatch({ type: "SET_TASKS", payload: JSON.parse(savedTasks) });
      }
    }
  }, []);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
