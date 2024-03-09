"use client";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { useFormik } from "formik";
import Modal from "../modal/Modal";
import { taskValidationSchema } from "@/helpers/taskSchema";
import { CustomTextarea } from "../input/text-tarea/textTarea";
import { CustomInput } from "../input/input/input";
import Toast from "../toast/Toast";
import { useTaskContext } from "@/app/context/ContextProvider";

const AddTask: React.FC = () => {
  const { createTask } = useTaskContext();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<{ visible: boolean, text: string, error: boolean }>({
    visible: false,
    text: "",
    error: false
  });

  const formik = useFormik({
    initialValues: {
      titulo: "",
      descripcion: "",
    },
    validationSchema: taskValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {

      try {
        await createTask({
          titulo: values.titulo,
          descripcion: values.descripcion,
          estado: "Pendiente",
        });
        setSubmitting(false);
        setModalOpen(false);
        setShowToast({ visible: true, text: "Tarea agregada correctamente", error: false });
        setTimeout(() => {
          setShowToast(prevState => ({ ...prevState, visible: false }));
        }, 3000);
        formik.resetForm();
      } catch (error) {
        setShowToast({ visible: true, text: "Error al agregar tarea", error: true });
      }
    },
  });

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full">
        Agregar Tarea <AiOutlinePlus className="ml-2" size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={formik.handleSubmit}>
          <h3 className="font-bold text-lg">Agregar nueva tarea</h3>
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
            <button
              type="submit"
              className="btn"
              disabled={formik.isSubmitting}>
              Agregar
            </button>
          </div>
        </form>
      </Modal>
      {showToast.visible && <Toast text={showToast.text} error={showToast.error} />}
    </div>
  );
};

export default AddTask;
