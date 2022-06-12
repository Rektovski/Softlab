import Timer from "./timer/Timer";
import {BrowserRouter} from "react-router-dom";
import {Route,Routes} from "react-router";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Timer' element={<Timer startingTime={360}/>}/>
                <Route path='*' element={<div>This page in not available. Try to go on "http://localhost:3000/Timer"</div>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
