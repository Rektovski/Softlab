import {Button, Container, Form} from "react-bootstrap";
import './main/style/authorizationPage.css';
import axios from "axios";
import {useState} from "react";

export default function AuthorizationPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUserName = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const authorization = async (event) => {
        event.preventDefault();
        if(username && password){
            const response = await axios.post('http://localhost:3030/login', {username, password});
            localStorage.setItem('token', response.data.token);
        }
    }

    return (
        <div className={'centeredContainer'}>
            <Container className={'border border-1 border-info p-2 rounded'}>
                <Form onSubmit={authorization}>
                    <Form.Group className={'my-2'}>
                        <Form.Label>Username: </Form.Label>
                        <Form.Control value={username} onChange={handleChangeUserName}/>
                    </Form.Group>
                    <Form.Group className={'my-2'}>
                        <Form.Label>Password: </Form.Label>
                        <Form.Control type={'password'} value={password} onChange={handleChangePassword}/>
                    </Form.Group>
                    <div className={'d-flex justify-content-end'}>
                        <Button className={'my-2'} type={'submit'}>Login</Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}