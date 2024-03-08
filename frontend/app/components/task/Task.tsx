"use client";

import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "../modal/Modal";
import { Task as ITask } from "@/interfaces/task";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.titulo);
  const [taskDescriptionToEdit, setTaskDescriptionToEdit] = useState<string>(task.descripcion);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setOpenModalEdit(false);
  };

  const handleDeleteTask = async (id: string) => {
    setOpenModalDeleted(false);
  };

  return (
    <tr key={task.id}>
      <td className="w-full">{task.titulo}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="flex flex-col gap-4 mt-8">
            <div>
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Titulo"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <textarea
                value={taskDescriptionToEdit}
                onChange={(e) => setTaskDescriptionToEdit(e.target.value)}
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
        <FiTrash2
          onClick={() => setOpenModalDeleted(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className="text-lg">
            ¿Estás seguro de que deseas eliminar esta tarea?
          </h3>
          <div className="modal-action">
            <button className="btn">Si</button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
