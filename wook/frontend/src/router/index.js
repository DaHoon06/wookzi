import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'
import {LayoutPage} from "../pages/LayoutPage";
import {Main} from "../components/Main";
import {Board} from "../components/Board";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LayoutPage />}>
      <Route element={<Navigate to={'/'} />} />
      <Route element={<Main />} index  />

      {/*<Route path={'board'}>*/}
      {/*  <Route element={<Board />} index  />*/}
      {/*  <Route element={<Board />} path={'/test'}  />*/}
      {/*  <Route element={<Board />} path={':postId'}  />*/}
      {/*</Route>*/}

    </Route>
  )
)
