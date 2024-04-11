const API_URL_PATH = "students";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const URL_TO_FETCH = `${BASE_URL}/${API_URL_PATH}`;

const getStudents = () => {
  return fetch(URL_TO_FETCH, { method: "GET" }).then((response) => {
    return response.json();
  });
};

const createStudent = (newStudent) => {
  return fetch(URL_TO_FETCH, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newStudent),
  });
};

const updateStudent = (updatingStudent) => {
  return fetch(`${URL_TO_FETCH}/${updatingStudent.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatingStudent),
  });
};

const deleteStudent = (id) => {
  return fetch(`${URL_TO_FETCH}/${id}`, { method: "DELETE" });
};

export const studentServices = {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
