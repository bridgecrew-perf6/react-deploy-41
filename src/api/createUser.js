import axios from "axios";

export default async function createUser() {
  const request = await axios.post(`${process.env.REACT_APP_API_URL}/users`);

  return await request.data;
};
