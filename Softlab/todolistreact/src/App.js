import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ErrorPage from "./main/ErrorPage";
import TodoList from './main/TodoList';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<TodoList/>}></Route>
                <Route path={'*'} element={<ErrorPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;