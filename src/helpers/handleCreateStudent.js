import { studentServices } from "../services/studentServices";

export const handleCreateStudent = (formProps, setStudents) => {
  const newStudent = {
    id: Date.now().toString(),
    name: formProps.name,
    age: formProps.age,
  };

  studentServices
    .createStudent(newStudent)
    .then(
      studentServices
        .getStudents()
        .then((students) => setStudents([...students]))
    );
};
