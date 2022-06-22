import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Main from "./main/Main";
import ErrorPage from "./main/ErrorPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main/>}></Route>
                <Route path={'*'} element={<ErrorPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
