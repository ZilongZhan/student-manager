import { handleDeleteStudent } from "../helpers";
import { Button } from "./Button";
import { StudentInfo } from "./StudentInfo";

export const Student = ({ student, setStudents }) => {
  return (
    <li>
      <StudentInfo student={student} />
      <Button
        label="delete"
        action={() => handleDeleteStudent(student.id, setStudents)}
      />
    </li>
  );
};
