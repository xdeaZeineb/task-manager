import { DragDropContext } from "react-beautiful-dnd";
import { useTaskContext } from "@/contexts/taskContext";
import TaskListByStage from "./TaskListByStage";
import StageCard from "./StageCard";

const TaskList = () => {
  const { state, dispatch } = useTaskContext();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const draggedTask = state.tasks.find(
      (task) => task.id === parseInt(draggableId)
    );
    const updatedTask = { ...draggedTask, stage: destination.droppableId };

    dispatch({ type: "EDIT_TASK", payload: updatedTask });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-2">
        <StageCard title={"Pending"}>
          <TaskListByStage stage="pending" droppableId="pending" />
        </StageCard>
        <StageCard title={"In Progress"}>
          <TaskListByStage stage="in progress" droppableId="in progress" />
        </StageCard>
        <StageCard title={"Completed"}>
          <TaskListByStage stage="complete" droppableId="complete" />
        </StageCard>
      </div>
    </DragDropContext>
  );
};

export default TaskList;
