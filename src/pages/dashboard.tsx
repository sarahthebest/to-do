import { useState } from "react";
import TaskColumn from "../components/TaskColumn";
import Btn from "../components/Btn";
import Modal from "../components/Modal";
import { Task as TaskType } from "../types";
import Nav from "../components/Nav";

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addTask = (task: TaskType) => {
    setTasks([...tasks, task]);
    closeModal();
  };

  const deleteTask = (taskToDelete: TaskType) => {
    setTasks(tasks.filter((task) => task.title !== taskToDelete.title));
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col dashboard min-h-screen p-8 gap-10 w-full">
        <div className="dashHeader flex flex-row gap-10 place-items-center">
          <h1 className="text-4xl ">To-do Board</h1>
          <Btn text="New Task" onClick={openModal} type={undefined} />
        </div>
        {isModalOpen && <Modal onClose={closeModal} addTask={addTask} />}
        <div className="grid grid-cols-3 w-full min-h-screen gap-10">
          <TaskColumn
            taskStatus="To-do"
            tasks={tasks.filter((task) => task.status === "To-do")}
            deleteTask={deleteTask}
          />
          <TaskColumn
            taskStatus="Doing"
            tasks={tasks.filter((task) => task.status === "Doing")}
            deleteTask={deleteTask}
          />
          <TaskColumn
            taskStatus="Done"
            tasks={tasks.filter((task) => task.status === "Done")}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
