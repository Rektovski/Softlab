import TodoList from "./components/TodoList";
import Loading from "./components/Loading";
import {useContext} from "react";
import LoadingContext from "./context/LoadingContext";
import ThemeContext from "./context/ThemeContext";
import Clock from "./components/Clock";

export default function Main() {
    const {loading} = useContext(LoadingContext);
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
            <Clock/>
            <TodoList/>
            {
                loading && <Loading/>
            }
        </div>
    );
}