import { ADD_LOGIN_DATA } from "./actiontypes";

const init = {
  loginData: [],
};

const loginReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_LOGIN_DATA:
      return { ...store, loginData: [...store.loginData, payload] };

    default:
      return { ...store };
  }
};
export { loginReducer };
