import { createContext, useContext, useState } from "react";
export const CourseContext = createContext();

export const useContextCourses = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("No esta dentro de CourseContextProvider");
  }
  return context;
};
export const CourseContextProvider = ({ children }) => {
  const [courses, setcourses] = useState([]);
  return <CourseContext.Provider value={{courses}}>{children}</CourseContext.Provider>;
};
