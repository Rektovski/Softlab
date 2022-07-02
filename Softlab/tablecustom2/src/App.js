import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ErrorPage from "./main/ErrorPage";
import Home from "./main/Home";
import ThemeContext from "./main/ThemeContext";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<Home/>}></Route>
                        <Route path={'*'} element={<ErrorPage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;