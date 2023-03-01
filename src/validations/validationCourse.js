import * as Yup from "yup";
export const courseSchema = Yup.object().shape({
  title: Yup.string().required(),
  category: Yup.string().required(),
  image: Yup.required(),
  level: Yup.string().required(),
  description: Yup.string().min(15).max(40).required(),
  video: Yup.required(),
});
