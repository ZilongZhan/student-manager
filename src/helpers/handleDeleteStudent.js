import { studentServices } from "../services/studentServices";

export const handleDeleteStudent = (id, setStudents) => {
  studentServices
    .deleteStudent(id)
    .then(() =>
      studentServices
        .getStudents()
        .then((students) => setStudents([...students]))
    );
};
