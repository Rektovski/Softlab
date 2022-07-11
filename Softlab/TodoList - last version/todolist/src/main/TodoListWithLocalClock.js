import TodoList from "./components/forTodoList/TodoList";
import Loading from "./components/forTodoList/Loading";
import {useContext} from "react";
import LoadingContext from "./context/LoadingContext";
import ThemeContext from "./context/ThemeContext";
import Clock from "./components/forTodoList/Clock";

export default function TodoListWithLocalClock() {
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