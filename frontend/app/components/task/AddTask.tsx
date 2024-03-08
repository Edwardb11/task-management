"use client";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "../modal/Modal";
import { addTodo } from "@/app/actions/todoActions";
import { useRouter } from "next/navigation";
import { taskValidationSchema } from "@/helpers/taskSchema";
import { CustomTextarea } from "../input/text-tarea/textTarea";
import { CustomInput } from "../input/input/input";

const AddTask: React.FC = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      titulo: "",
      descripcion: "",
    },
    validationSchema: taskValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      await addTodo({
        titulo: values.titulo,
        descripcion: values.descripcion,
        estado: "Pendiente",
      });
      setSubmitting(false);
      setModalOpen(false);
      router.refresh();
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
    </div>
  );
};

export default AddTask;
