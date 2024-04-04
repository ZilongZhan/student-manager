import { studentServices } from "../services/studentServices";

export const handleUpdateStudent = (students, formProps, setStudents) => {
  const existingStudentIndex = students.findIndex(
    (student) => student.name === formProps.name
  );

  const existingStudent = students[existingStudentIndex];

  const updatingStudent = {
    id: existingStudent.id,
    name: existingStudent.name,
    age: formProps.age,
  };

  studentServices
    .updateStudent(updatingStudent)
    .then(() =>
      studentServices
        .getStudents()
        .then((students) => setStudents([...students]))
    );
};
