import { Formik, Form } from "formik";
import { createCourse } from "../../api/course.api";
import { useNavigate } from "react-router-dom";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import WrapperInput from "./WrapperInput";
import Title from "../atoms/Title";
import "../../assets/styles/RegisterCursos.css"
import imgX from "../../assets/icons/Off.svg";
import ImgAdd from '../../assets/icons/FotoAdd.svg'
import ImgVideo from '../../assets/icons/Video.svg'
//import { courseSchema } from "../../validations/validationCourse";

export default function FormCreateCourse() {
  const navigate = useNavigate();
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
            const response = await createCourse(values);
            console.log(values);
            actions.resetForm();
            navigate("/coursesStudent");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
         <>
         <div className="container-cursos">
          <Form onSubmit={handleSubmit} className='container-cursos'>
          <img className='ImgX' src={imgX} alt="logo" />
          <div className='title-cursos'>
            <Title level='h1' text={"Añadir Cursos"}/>
        </div>
            <div className="inputs-cursos">
                <WrapperInput name="title" type="text" placeholder="Nombre del curso" msn="Nombre: " />
                <Label msn="Categoria: "/>
                <select name="category" placeholder="Categoria" onChange={handleChange}>
                  <option value="AutoCAD">AutoCad</option>
                  <option value="Topografia">Topografía</option>
                  <option value="SketchUp">SketchUp</option>
                </select>
            </div>
            <div className='inputs-cursos'>
            <div className='file'>
                <WrapperInput type="file" placeholder="Imagen" id="file2" name="image" handleChange={handleChange}/>
                <p>Imagen</p>
                <img className='fileImg' src={ImgAdd} alt="img" />
            </div>
            <div className='file'>
                <WrapperInput type="file" placeholder="Video" id="file2" name="video" handleChange={handleChange}/>
                <p>Videos</p>
                <img className='fileImg' src={ImgVideo} alt="img" />
            </div>
        
        </div>
            
            
            
            {/* <Label msn={"Title"} />
            <Input
              type={"text"}
              name={"title"}
              onChange={handleChange}
              value={values.title}
            /> */}


           

            <Label msn={"Level"} />
            <Input
              type={"text"}
              name={"level"}
              onChange={handleChange}
              value={values.level}
            />

            <Label msn={"Description"} />
            <Input
              type={"text"}
              name={"description"}
              onChange={handleChange}
              value={values.description}
            />

            <Label msn={"Video"} />
            <Input
              type={"file"}
              name={"video"}
              onChange={handleChange}
              value={values.video}
            />
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-success"
            >
              {isSubmitting ? "Saving.." : "Save"}
            </button>
          </Form>
          </div>
          </>
          )}
      </Formik>
    </>
  );
}
