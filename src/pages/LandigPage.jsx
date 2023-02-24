import React from 'react'
import { Link } from 'react-router-dom'
export default function LandigPage() {
  return (
    <>
    <h1>LandigPage</h1>
    <Link to="/registerStudent">Student</Link>
    <Link to="/registerTeacher">Teacher</Link>
    <Link to="/createCourse">Create course</Link>
    
    </>
  )
}
