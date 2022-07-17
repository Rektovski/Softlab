import {Badge, Button, Container, ListGroup} from "react-bootstrap";
import {useContext, useState} from "react";
import UserContext from "../context/UserContext";
import AllUsersContext from "../context/AllUsersContext";
import { CgProfile as ProfileIcon } from "react-icons/cg";
import ChatModal from "./ChatModal";
import "../style/mainPageStyle.css";
import AnotherUserContext from "../context/AnotherUserContext";

export default function MainPage() {
    const {user, setUser} = useContext(UserContext);
    const {allUsers} = useContext(AllUsersContext);
    const [show, setShow] = useState(false);
    const [chatUser, setChatUser] = useState({});
    const {setAnotherUser} = useContext(AnotherUserContext);

    const logout = () => {
        localStorage.removeItem('token');
        setUser(false);
        window.location.replace('http://localhost:3000/');
    }

    return (
        <div>
            <Container>
                <ListGroup>
                    <ListGroup.Item className={'d-flex align-items-center bg-dark text-light'}>
                        <div className={'flex-fill'}>{`${user.firstName} ${user.lastName}`}</div>
                        <Button variant={"primary"} onClick={logout}>Logout</Button>
                    </ListGroup.Item>
                    {
                        allUsers.map((user)=>(
                            <ListGroup.Item
                                key={user.username}
                                className={'d-flex align-items-center hovering'}
                                onClick={()=>{
                                    setShow(true);
                                    setChatUser(user);
                                    setAnotherUser(user);
                                }}
                            >
                                <ProfileIcon className={'me-2'}/>
                                <div className={'flex-fill'}>{`${user.firstName} ${user.lastName}`}</div>
                                <Badge>{user.username}</Badge>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Container>

            <ChatModal
                show={show}
                onHide={()=>{setShow(false)}}
                data={chatUser}
            />
        </div>
    );
}