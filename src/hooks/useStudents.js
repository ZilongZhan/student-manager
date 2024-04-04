import { useEffect, useState } from "react";
import { studentServices } from "../services/studentServices";

export const useStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    studentServices.getStudents().then((students) => handleSetStudents([...students]));
  }, []);

  const handleSetStudents = (newStudents) => {
    setStudents(newStudents);
  };

  return { students, handleSetStudents };
};
