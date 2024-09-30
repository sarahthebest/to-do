import Task from "./Task";
import { Task as TaskType } from "../types";

interface TaskColumnProps {
  taskStatus: string;
  tasks: TaskType[];
  deleteTask: (task: TaskType) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({
  taskStatus,
  tasks,
  deleteTask,
}) => {
  return (
    <div className="taskColumn w-full">
      <h2 className="font-bold mb-10 text-xl">{taskStatus}</h2>
      <div className="tasks h-fit rounded gap-4 p-4 flex flex-wrap flex-row place-content-evenly">
        {tasks.length === 0 && <h3>No Tasks...</h3>}
        {/* Mapping tasks with .reverse to display newest task on top */}
        {tasks
          .slice()
          .reverse()
          .map((task) => (
            <Task key={task.title} task={task} deleteTask={deleteTask} />
          ))}
      </div>
    </div>
  );
};

export default TaskColumn;
