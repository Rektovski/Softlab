import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import LoginPage from "./main/components/LoginPage";
import {useEffect, useState} from "react";
import ErrorPage from "./main/components/ErrorPage";
import MainPage from "./main/components/MainPage";
import UserContext from "./main/context/UserContext";
import AllUserContext from "./main/context/AllUsersContext";
import api from "./main/api/Api";
import ChatContext from "./main/context/ChatContext";
import AnotherUserContext from "./main/context/AnotherUserContext";

function App() {
    const [user, setUser] = useState(false);
    const [allUsers, setAllUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState([]);
    const [anotherUser, setAnotherUser] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            api
                .get(`http://localhost:3040/users/current`)
                .then((response) => {
                    setUser(response.data);
                    setTimeout(() => {
                        localStorage.removeItem('token');
                        setUser(null);
                        window.location.replace('http://localhost:3000/');
                    }, 360000);
                })
                .catch(error => console.error(error, 'shecdoma moxda erti user is wamoghebisas'));
            api.get('http://localhost:3040/users')
                .then((response) => {
                    const allUsersData = response.data.filter((person) => person.firstName !== user.firstName)
                    setAllUsers(allUsersData);
                })
                .catch(error => console.error(error, 'shecdoma moxda userebis wamoghebisas'));
        }
        api.get(`http://localhost:3040/chat?username=${anotherUser.username}`)
            .then((response) => {
                setCurrentChat(response.data);
            })
            .catch(error => console.error(error, 'shecdoma moxda chemi chatis wamoghebisas'));

    }, [currentChat]);

    return (
            <AnotherUserContext.Provider value={{anotherUser, setAnotherUser}}>
                <UserContext.Provider value={{user, setUser}}>
                    <AllUserContext.Provider value={{allUsers, setAllUsers}}>
                        <ChatContext.Provider value={{currentChat, setCurrentChat}}>
                            <BrowserRouter>
                                {
                                    user ? (
                                        <Routes>
                                            <Route path={'/'} element={<MainPage/>}></Route>
                                            <Route path={'*'} element={<ErrorPage/>}></Route>
                                        </Routes>
                                    ) : (
                                        <Routes>
                                            <Route path={'*'} element={<LoginPage/>}></Route>
                                        </Routes>
                                    )
                                }
                            </BrowserRouter>
                        </ChatContext.Provider>
                    </AllUserContext.Provider>
                </UserContext.Provider>
            </AnotherUserContext.Provider>
    );
}

export default App;
