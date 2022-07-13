import TodoList from "./TodoList";
import Loading from "./Loading";
import {useContext} from "react";
import LoadingContext from "../../context/LoadingContext";
import ThemeContext from "../../context/ThemeContext";
import Clock from "../forPortfolio/Clock";

export default function TodoListWithLocalClock() {
    const {loading} = useContext(LoadingContext);
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'} mt-5`}>
            <TodoList/>
            {
                loading && <Loading/>
            }
        </div>
    );
}