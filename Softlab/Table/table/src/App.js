import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ErrorPage from "./table/ErrorPage";
import Main from "./table/Main";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/'}>
              <Route path={'/'} element={<Main/>}></Route>
          </Route>
          <Route path={'*'} element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}