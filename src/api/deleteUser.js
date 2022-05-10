import axios from "axios";

export default async function deleteUser(id) {
  const request = await axios.delete(
    `${process.env.REACT_APP_API_URL}/users/${id}`
  );

  return await request.data;
}
