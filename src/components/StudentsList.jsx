import { Student } from "./Student";

export const StudentsList = ({ setStudents, students }) => {
  return (
    <ul>
      {students.map((student, index) => (
        <Student
          key={index}
          student={student}
          setStudents={setStudents}
        />
      ))}
    </ul>
  );
};
