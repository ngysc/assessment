import axios from "axios";

export function getUsers(hook: any) {
  interface User {
    id: string;
    first_name: string;
    last_name: string;
    status: string;
    created_at: string;
    updated_at: string;
  }

  axios
    .get<User[]>("https://assessment-users-backend.herokuapp.com/users.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      hook(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function updateUsers(formData: any, id: any) {
  axios
    .put(
      `https://assessment-users-backend.herokuapp.com/users/${id}.json`,
      JSON.stringify(formData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      alert("User updated successfully.");
      console.log(response);
    })
    .catch((error) => {
      alert("An error occured.");
      console.log(error);
    });
}

export function createUser(formData: any) {
  axios
    .post(
      "https://assessment-users-backend.herokuapp.com/users.json",
      JSON.stringify(formData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      alert("New user added successfully.");
      return response;
    })
    .catch((error) => {
      alert("An error occured.");
      console.log(error);
    });
}
