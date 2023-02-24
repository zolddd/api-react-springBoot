import { useEffect,useContext } from "react"
import { getCourses } from '../api/course.api'
export default function HomeTeacher() {
  async function render(){
    const response= await getCourses()
  }
  return (
    <div>Courses
      {render()}
    </div>
  )
}
