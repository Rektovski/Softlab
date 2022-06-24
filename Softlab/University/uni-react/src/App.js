import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Body from "./main/Body";
import ErrorPage from "./main/ErrorPage";
import Header from "./main/Header";
import RegistrationForm from "./main/RegistrationForm";
import Login from "./main/Login";
import Contact from "./main/Contact";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Header/>}>
                    <Route path={""} element={<Body/>}></Route>
                    <Route path={"/form"} element={<RegistrationForm/>}></Route>
                    <Route path={"/login"} element={<Login/>}></Route>
                    <Route path={"/contact"} element={<Contact/>}></Route>
                </Route>
                <Route path={"*"} element={<ErrorPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;