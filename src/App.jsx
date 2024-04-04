import { useStudents, useForm } from "./hooks";
import { Header, Form, StudentsList } from "./components";

function App() {
  const { students, handleSetStudents } = useStudents();
  const { inputValue: name, handleInputValue: setName } = useForm();
  const { inputValue: age, handleInputValue: setAge } = useForm();

  const formProps = { name, setName, age, setAge };
  return (
    <>
      <Header heading="Student Manager" />
      <Form
        students={students}
        setStudents={handleSetStudents}
        formProps={formProps}
      />
      <StudentsList setStudents={handleSetStudents} students={students} />
    </>
  );
}

export default App;
