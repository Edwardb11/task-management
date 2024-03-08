import * as Yup from "yup";

export const taskValidationSchema = Yup.object({
  titulo: Yup.string().required("El título es obligatorio"),
  descripcion: Yup.string().required("La descripción es obligatoria"),
});
