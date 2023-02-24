import { getCourses, deleteCourse } from "../api/course.api";
import { useEffect, useState } from "react";

export default function CoursesStudent() {
  const [courses, setcourses] = useState([]);

  const handleDelete = async (id) => {
    try {
      const response = await deleteCourse(id);
      alert("elimado corrrectamente");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function loadCourses() {
      const response = await getCourses();
      console.log(response.data);
      setcourses(response.data);
    }
    loadCourses();
  }, []);

  const renderMain = () => {
    if (courses.length === 0) {
      return <h1>No courses find</h1>;
    }
    return courses.map((course) => (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Creation date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.title}</td>
            <td>{course.category}</td>
            <td>{course.create_at}</td>
            <td>
              <button
                onClick={() => {
                  handleDelete(course.id);
                }}
                className="btn btn-danger"
              >
                Delete
              </button>
              <button className="btn btn-warning">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    ));
  };
  return (
    <>
      <h1>Courses you have created</h1>
      {renderMain()}
    </>
  );
}
