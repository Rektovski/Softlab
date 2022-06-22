import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Body from "./main/Body";
import ErrorPage from "./main/ErrorPage";
import Header from "./main/Header";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Header/>}>
                    <Route path={""} element={<Body/>}></Route>
                </Route>
                <Route path={"*"} element={<ErrorPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;