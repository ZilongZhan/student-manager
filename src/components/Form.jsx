import { handleFormData } from "../helpers";
import { Input } from "./Input";
import { Button } from "./Button";

export const Form = ({ students, setStudents, formProps }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    handleFormData(students, formProps, setStudents);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        id="name"
        type="text"
        value={formProps.name}
        action={formProps.setName}
      />
      <Input
        label="Age"
        id="age"
        type="number"
        value={formProps.age}
        action={formProps.setAge}
      />
      <Button label="submit" type="submit" />
    </form>
  );
};
