import {Header} from "../components/layout/header/Header";
import {Footer} from "../components/layout/footer/Footer";
import { Outlet } from 'react-router'

export const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
