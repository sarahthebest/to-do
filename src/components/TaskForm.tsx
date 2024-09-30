import { useState, FormEvent } from "react";
import Btn from "./Btn";
import Radio from "./Radio";
import { Task as TaskType } from "../types";

interface TaskFormProps {
  addTask: (task: TaskType) => void;
  onClose: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask, onClose }) => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskStatus, setTaskStatus] = useState<"To-do" | "Doing" | "Done">(
    "To-do"
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (taskTitle.trim() === "" || taskDescription.trim() === "") {
      alert("Please enter valid task details.");
      return;
    }

    const newTask: TaskType = {
      title: taskTitle.trim(),
      description: taskDescription.trim(),
      status: taskStatus,
    };

    addTask(newTask);
    setTaskTitle("");
    setTaskDescription("");
    setTaskStatus("To-do");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <label className="form-control w-full flex flex-col">
        <div className="label">
          <span className="label-text text-black">Task Title</span>
        </div>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Type here"
          className="bg-transparent input border-black w-full max-w-xs"
          required
        />
      </label>
      <Radio
        selectedStatus={taskStatus}
        onChange={(e) =>
          setTaskStatus(e.target.value as "To-do" | "Doing" | "Done")
        }
      />

      <label className="form-control">
        <div className="label">
          <span className="label-text text-black">Task Description</span>
        </div>
        <textarea
          className="textarea border-black h-24 bg-transparent resize-none"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Write your task..."
          required
        ></textarea>
      </label>
      <Btn type="submit" text="Submit" onClick={handleSubmit} />
    </form>
  );
};

export default TaskForm;
