const baseUrl = `https://json-server-deploy-j9se.onrender.com/${
  import.meta.env.VITE_API_URL_PATH
}`;

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
