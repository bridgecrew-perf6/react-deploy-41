import getUsers from "./api/getUsers";
import deleteUser from "./api/deleteUser";
import { useState } from "react";
import createUser from "./api/createUser";

export default function App() {
  const [userId, setUserId] = useState("");

  async function handleClickGetUsers() {
    getUsers()
      .then((users) => {
        console.log(users);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  async function handleClickCreateUser() {
    createUser()
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  async function handleClickDeleteUser() {
    if (!userId) {
      return;
    }

    deleteUser(userId)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <>
      <h1>:)</h1>
      <section>
        <button onClick={handleClickGetUsers}>Get users</button>
        <br />
        <br />
        <button onClick={handleClickCreateUser}>Create user</button>
        <br />
        <br />
        <input
          type="text"
          placeholder="User id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={handleClickDeleteUser} disabled={!userId}>
          Delete user
        </button>
      </section>
    </>
  );
}
