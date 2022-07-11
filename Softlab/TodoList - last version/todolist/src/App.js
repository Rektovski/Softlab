import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ErrorPage from "./main/error/ErrorPage";
import {useEffect, useState} from "react";
import LoadingContext from "./main/context/LoadingContext";
import Main from "./main/Main";
import Layout from "./Layout";
import ThemeContext from "./main/context/ThemeContext";
import UserContext from "./main/context/UserContext";
import AuthorizationPage from "./AuthorizationPage";
import axios from "axios";
import Gallery from "./main/components/forGallery/Gallery";

function App() {
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log('token is: ', localStorage.getItem('token'));
        if (localStorage.getItem('token')) {
            axios
                .get('http://localhost:3030/user', {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
                .then((response) => {
                    console.log(response.data);
                    setUser(response.data);
                })

        } else {
            setUser(null);
            localStorage.removeItem('token')
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
                                        <Route path={'/'} element={<Main/>}></Route>
                                        <Route path={'/gallery'} element={<Gallery/>}></Route>
                                    </Route>
                                    <Route path={'*'} element={<ErrorPage/>}></Route>
                                </Routes>
                            ) : (
                                <Routes>
                                    <Route path={'*'} element={<AuthorizationPage/>}></Route>
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