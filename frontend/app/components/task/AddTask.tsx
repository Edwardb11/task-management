"use client"
import { AiOutlinePlus } from "react-icons/ai";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "../modal/Modal";

const AddTask: React.FC = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(taskTitle, taskDescription);
    setTaskTitle("");
    setTaskDescription("");
    setModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Agregar Tarea <AiOutlinePlus className="ml-2" size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Agregar nueva tarea</h3>
          <div className="flex flex-col gap-4 mt-8">
            <div>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder="Titulo"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Descripcion"
                className="input input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn">
              Agregar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
