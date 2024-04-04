import { handleCreateStudent } from "./handleCreateStudent";
import { handleUpdateStudent } from "./handleUpdateStudent";

export const handleFormData = (students, formProps, setStudents) => {
  const existingStudent = students.some(
    (student) => formProps.name === student.name
  );

  existingStudent
    ? handleUpdateStudent(students, formProps, setStudents)
    : handleCreateStudent(formProps, setStudents);
};
