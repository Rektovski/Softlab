import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ErrorPage from "./main/error/ErrorPage";
import {useEffect, useState} from "react";
import LoadingContext from "./main/context/LoadingContext";
import Main from "./main/Main";
import Layout from "./Layout";
import ThemeContext from "./main/context/ThemeContext";
import AuthorizationPage from "./AuthorizationPage";
import UserContext from "./main/context/UserContext";
import axios from "axios";

function App() {
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token) {
            axios.get('http://localhost:3030/user', {
                headers: {
                    "Authorization": token
                }
            })
                .then((response)=>setUser(response.data))
                .catch((error)=>console.error(error));
        }
    },[])

    return (
        <UserContext.Provider value={{user, setUser}}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <LoadingContext.Provider value={{loading, setLoading}} className={`bg-${theme} text-${theme === 'dark' ? 'dark' : 'light'}`}>
                    <BrowserRouter>
                        <Routes>
                            {
                                user ?
                                    (
                                        <Route path={'/'} element={<Layout/>}>
                                            <Route path={'/'} element={<Main/>}></Route>
                                            <Route path={'*'} element={<ErrorPage/>}></Route>
                                        </Route>
                                    )
                                    :
                                    (
                                        <Route path={'/'} element={<AuthorizationPage/>}></Route>
                                    )
                            }
                        </Routes>
                    </BrowserRouter>
                </LoadingContext.Provider>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

export default App;