import TaskForm from "./TaskForm";
import { useEffect, useRef } from "react";
import { Task as TaskType } from "../types";

interface ModalProps {
  addTask: (task: TaskType) => void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, addTask }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  return (
    <dialog ref={dialogRef} id="taskModal" className="modal">
      <div className="modal-box bg-slate-200">
        <h3 className="font-bold text-lg mb-4">Create new task</h3>
        <TaskForm addTask={addTask} onClose={onClose} />
      </div>
    </dialog>
  );
};

export default Modal;
