import {useState} from "react";
import SessionContext from './sessionContext';

const ContextProvider = ({children}) => {
  const setLoggedUser = (data) => {
    setState(prevState => (
      {
        ...prevState,
        loggedUser: data
      }
    ))
  }

  const setLoggedIn = () => {
    setState(prevState => (
      {
        ...prevState,
        loggedIn: !!sessionStorage.getItem('userNickname')
      }
    ))
  }

  const initialState = {
    loggedUser: {},
    loggedIn: false,
    setLoggedUser,
    setLoggedIn
  }

  const [state, setState] = useState(initialState);
  return (
    <SessionContext.Provider value={state}>
      {children}
    </SessionContext.Provider>
  )
}

export default ContextProvider;
