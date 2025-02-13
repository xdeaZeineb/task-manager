import { useTaskContext } from "@/contexts/taskContext";
import TaskCard from "./TaskCard";
import { Droppable, Draggable } from "react-beautiful-dnd";

const TaskListByStage = ({ stage, droppableId }) => {
  const { state } = useTaskContext();
  const tasks = state.tasks;

  const filteredTasks = Array.isArray(tasks)
    ? tasks.filter((task) => task.stage === stage)
    : [];

  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={snapshot.isDraggingOver ? "dragging-over" : ""}
        >
          {filteredTasks.map((task, index) => (
            <Draggable
              key={task.id}
              draggableId={String(task.id)}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={snapshot.isDragging ? "dragging" : ""}
                >
                  <TaskCard key={task.id} task={task} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskListByStage;
