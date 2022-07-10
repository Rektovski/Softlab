import {Button, Container, Form} from "react-bootstrap";
import {useContext, useState} from "react";
import './main/style/authorizationPage.css';
import UserContext from "./main/context/UserContext";
import axios from "axios";

export default function AuthorizationPage() {
    const startingUserInfo = {
        username: '',
        password: '',
    }

    const [userInfo, setUserInfo] = useState(startingUserInfo);
    const {user, setUser} = useContext(UserContext);

    const handleChangeUserName = (event) => {
        setUserInfo({...userInfo, username: event.target.value});
    }

    const handleChangePassword = (event) => {
        setUserInfo({...userInfo, password: event.target.value});
    }

    const authorization = async (event) => {
        event.preventDefault();
        if(userInfo.username && userInfo.password){
            const {data} = await axios.post('http://localhost:3030/login', {userInfo});
            localStorage.setItem('token', data.token);
        }
    }

    return (
        <div className={'centeredContainer'}>
            <Container className={'border border-1 border-info p-2 rounded'}>
                <Form onSubmit={authorization}>
                    <Form.Group className={'my-2'}>
                        <Form.Label>Username: </Form.Label>
                        <Form.Control value={userInfo.username} onChange={handleChangeUserName}/>
                    </Form.Group>
                    <Form.Group className={'my-2'}>
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type={'password'} value={userInfo.password} onChange={handleChangePassword}/>
                    </Form.Group>
                    <div className={'d-flex justify-content-end'}>
                        <Button className={'my-2'} type={'submit'}>Login</Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}