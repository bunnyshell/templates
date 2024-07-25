const baseUrl = process.env.REACT_APP_BACKEND_URL;

export function getTodo(callback) {
  fetch(`${baseUrl}api/v1/get-all-todos`)
    .then((response) => {
      console.log({
        url: baseUrl,
      });
      console.log(response);
      return response.json();
    })
    .then((data) => callback(data));
}

export function addTodo(todo, callback) {
  fetch(`${baseUrl}api/v1/add-todo`, {
    method: "POST",
    body: JSON.stringify({ todo }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    callback();
  });
}

export function deleteTodoById(id, callback) {
  fetch(`${baseUrl}api/v1/delete-todo/${id}`, {
    method: "DELETE",
  }).then(() => {
    callback();
  });
}
