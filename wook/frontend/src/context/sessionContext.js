import { createContext } from "react";

const Context = createContext({
  loggedUser: {
    userNickname: '',
  },
  loggedIn: false,
  setLoggedUser: () => {},
  setLoggedIn: () => {}
});

export default Context;
