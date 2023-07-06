import { ADD_LOGIN_DATA } from "./actiontypes.js";

const handleAddLoginData = (payload) => ({
  type: ADD_LOGIN_DATA,
  payload,
});

export { handleAddLoginData };
