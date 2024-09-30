import { Task as TaskType } from "../types";
import { MdDeleteOutline } from "react-icons/md";
import Btn from "./Btn";

interface TaskProps {
    task: TaskType;
    deleteTask: (task: TaskType) => void; 
  }
  
  const Task: React.FC<TaskProps> = ({ task, deleteTask }) => {
  return (
    <div className="taskWrapper bg-emerald-500 p-4 h-fit flex flex-col rounded w-48">
      <div className="taskHeader flex flex-row justify-between mb-4">
        <h3 className="font-bold">{task.title}</h3>
        <div className="badge badge-accent font-thin">{task.status}</div>
      </div>
      <div className="taskBody flex flex-col">
        <p className="mb-2 break-words w-full">{task.description}</p>
        <Btn
          text=""
          onClick={() => deleteTask(task)} 
          icon={<MdDeleteOutline size={20}/>} 
        />
      </div>
    </div>
  );
};

export default Task;
