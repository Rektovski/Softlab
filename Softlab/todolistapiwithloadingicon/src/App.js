import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Main from "./main/Main";
import LoadingContext from "./main/LoadingContext";
import {useState} from "react";

function App() {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{loading, setLoading}}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Main/>}></Route>
                </Routes>
            </BrowserRouter>
        </LoadingContext.Provider>
    );
}

export default App;
