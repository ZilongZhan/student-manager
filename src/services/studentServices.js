const baseUrl = "http://localhost:3001/students";

const getStudents = () => {
  return fetch(baseUrl, { method: "GET" }).then((response) => {
    return response.json();
  });
};

const createStudent = (newStudent) => {
  return fetch(baseUrl, { method: "POST", body: JSON.stringify(newStudent) });
};

const updateStudent = (updatingStudent) => {
  return fetch(`${baseUrl}/${updatingStudent.id}`, {
    method: "PUT",
    body: JSON.stringify(updatingStudent),
  });
};

const deleteStudent = (id) => {
  return fetch(`${baseUrl}/${id}`, { method: "DELETE" });
};

export const studentServices = {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
