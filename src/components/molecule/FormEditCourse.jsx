import { Formik, Form } from "formik";
import { updateCourse } from "../../api/course.api";
import { useParams } from "react-router-dom";


export default function FormEditCourse() {
 let {id} = useParams();
  console.log(id);
 
  return (
    <>
     <Formik
        initialValues={{
          title: "",
          category: "",
          image: "",
          level: "",
          description: "",
          video: "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const response = await updateCourse(id,values);
            console.log("ID:   :");
            console.log(id);
            console.log("DATOS:   :");
            console.log(values);
            actions.resetForm();
            navigate("/coursesStudent");
          } catch (error) {
            console.log(error);
          }
         
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
           
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
              className="form-control"
            />
            <label>Category</label>
            <input
              type="text"
              name="category"
              placeholder="Write a category"
              onChange={handleChange}
              value={values.category}
              className="form-control"
            />
            <label>Image</label>
            <input
              type="file"
              name="image"
              placeholder="Insert a image"
              onChange={handleChange}
              value={values.image}
              className="form-control"
            />
            <label>Level</label>
            <input
              type="text"
              name="level"
              placeholder="Write a level"
              onChange={handleChange}
              value={values.level}
              className="form-control"
            />
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
              className="form-control"
            />
            <label>Video</label>
            <input
              type="file"
              name="video"
              placeholder="Insert a video"
              onChange={handleChange}
              value={values.video}
              className="form-control"
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving.." : "Save"}
            </button>
          </Form>
        )}
      </Formik>


    </>
  )
}
