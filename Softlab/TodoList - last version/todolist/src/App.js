import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ErrorPage from "./main/components/error/ErrorPage";
import {useEffect, useState} from "react";
import LoadingContext from "./main/context/LoadingContext";
import Layout from "./Layout";
import ThemeContext from "./main/context/ThemeContext";
import UserContext from "./main/context/UserContext";
import AuthorizationPage from "./AuthorizationPage";
import axios from "axios";
import Gallery from "./main/components/forGallery/Gallery";
import Portfolio from "./main/components/forPortfolio/Portfolio";
import TodoListWithLocalClock from "./main/components/forTodoList/TodoListWithLocalClock";
import Website from "./main/components/forWebsite/Website";
import Timer from "./main/components/forTimer/Timer";
import Counter from "./main/components/forCounter/Counter";
import RegistrationForm from "./main/components/forStudentRegistration/RegistrationForm";
import StudentList from "./main/components/forStudentList/StudentList";

function App() {
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
        if (localStorage.getItem('token')) {
            axios
                .get('http://localhost:3030/user', {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
                .then((response) => {
                    setUser(response.data);
                    setTimeout(() => {
                        localStorage.removeItem('token');
                        setUser(null);
                        window.location.replace('http://localhost:3000/');
                    }, 360000);
                })
                .catch(error=>console.error(error));
        }
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <LoadingContext.Provider value={{loading, setLoading}}
                                         className={`bg-${theme} text-${theme === 'dark' ? 'dark' : 'light'}`}>
                    <BrowserRouter>
                        {
                            user ? (
                                <Routes>
                                    <Route path={'/'} element={<Layout/>}>
                                        <Route path={'/'} element={<Portfolio/>}></Route>
                                        <Route path={'/gallery'} element={<Gallery/>}></Route>
                                        <Route path={'/todolist'} element={<TodoListWithLocalClock/>}></Route>
                                        <Route path={'/website'} element={<Website/>}></Route>
                                        <Route path={'/timer'} element={<Timer/>}></Route>
                                        <Route path={'/counter'} element={<Counter/>}></Route>
                                        <Route path={'/students'} element={<StudentList/>}></Route>
                                        <Route path={'/signup'} element={<RegistrationForm/>}></Route>
                                    </Route>
                                    <Route path={'*'} element={<ErrorPage/>}></Route>
                                </Routes>
                            ) : (
                                <Routes>
                                    <Route path={'*'} element={<AuthorizationPage error={error} onError={(error)=>{setError(error)}}/>}></Route>
                                </Routes>
                            )
                        }
                    </BrowserRouter>
                </LoadingContext.Provider>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

export default App;