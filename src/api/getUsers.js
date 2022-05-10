import axios from "axios";

export default async function getUsers() {
  const request = await axios.get(`${process.env.REACT_APP_API_URL}/users`);

  return await request.data;
};
