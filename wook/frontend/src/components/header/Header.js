import {useContext} from "react";
import SessionContext from "../../context/sessionContext";

export const Header = () => {
  const {loggedIn} = useContext(SessionContext);

  const logout = () => {

  }

  return (
    <header>
      {loggedIn}
      <p>{loggedIn ? '로그아웃 하기' : '로그인 하기'}</p>
    </header>
  )
}
