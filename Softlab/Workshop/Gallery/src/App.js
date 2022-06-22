import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ErrorPage from "./gallery/ErrorPage";
import Gallery from "./gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={'/'} element={<Gallery/>}></Route>
          <Route path={'*'} element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
