"use client";
import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "../modal/Modal";
import { Task as ITask } from "@/interfaces/task";
import { deleteTodo, editTodo } from "@/app/actions/todoActions";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { taskValidationSchema } from "@/helpers/taskSchema";
import { CustomInput } from "../input/input/input";
import { CustomTextarea } from "../input/text-tarea/textTarea";
import CustomSelect from "../select/select";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      titulo: task.titulo,
      descripcion: task.descripcion,
      estado: task.estado,
    },
    validationSchema: taskValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      await editTodo({
        id: task.id,
        titulo: values.titulo,
        descripcion: values.descripcion,
        estado: values.estado,
      });
      setSubmitting(false);
      setOpenModalEdit(false);
      router.refresh();
    },
  });

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
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
          <form onSubmit={formik.handleSubmit}>
            <h3 className="font-bold text-lg">Editar tarea</h3>
            <div className="flex flex-col gap-4 mt-8">
              <CustomInput
                formik={formik}
                id="titulo"
                name="titulo"
                placeholder="Título"
              />
              <CustomTextarea
                formik={formik}
                id="descripcion"
                name="descripcion"
                placeholder="Descripción"
              />
              <CustomSelect
                formik={formik}
                options={[
                  { value: "Pendiente", label: "Pendiente" },
                  { value: "Completado", label: "Completado" },
                ]}
                id="estado"
                name="estado"
              />

              <button
                type="submit"
                className="btn"
                disabled={formik.isSubmitting}>
                Guardar cambios
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
            <button onClick={() => handleDeleteTask(task.id!)} className="btn">
              Si
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
