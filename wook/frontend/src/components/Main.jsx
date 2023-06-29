import {Link} from "react-router-dom";
import {useContext} from "react";
import SessionContext from "../context/sessionContext";
import {Header} from "./header/Header";

export const Main = () => {
  const {setLoggedIn,loggedIn, setLoggedInUser} = useContext(SessionContext);


  const login = async () => {
    sessionStorage.setItem('userNickname', 'TEST');
    setLoggedIn();
  }

  const logout = async () => {
    sessionStorage.clear();
    setLoggedIn();
  }

  return (
    <main>
      <Header />
      <Link to={'/board'}>Go To Board</Link>
      {
        !loggedIn ? (
          <button type={'button'} onClick={login}>LOGIN</button>
        ) : (
          <button type={'button'} onClick={logout}>logout</button>
        )
      }
    </main>
  )
}
