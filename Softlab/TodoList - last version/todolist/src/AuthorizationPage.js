import {Button, Card, Form} from "react-bootstrap";
import {useState} from "react";
import './main/style/authorizationPage.css';
import axios from "axios";

export default function AuthorizationPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();
        const {data} = axios.post('http://localhost:3030/login',{username, password});
        localStorage.setItem('token', data.token);
        // window.location.reload();
    }

    return (
        <div className={'centeredLogin'}>
            <Card className={'cardHovering rounded p-5 border border-1 border-info'}>
                <Form onSubmit={login}>
                    <Form.Group className={'m-2'}>
                        <Form.Label className={'m-2'}>Username: </Form.Label>
                        <Form.Control
                            placeholder={'Type your username'}
                            value={username}
                            onChange={(event)=>{setUsername(event.target.value)}}
                        />
                    </Form.Group>
                    <Form.Group className={'m-2'}>
                        <Form.Label className={'m-2'}>Password: </Form.Label>
                        <Form.Control
                            type={'password'}
                            placeholder={'Type your password'}
                            value={password}
                            onChange={(event)=>{setPassword(event.target.value)}}
                        />
                    </Form.Group>
                    <div className={'d-flex justify-content-end'}>
                        <Button type={'submit'} className={'m-2'}>login</Button>
                    </div>
                </Form>
            </Card>
        </div>
    )
}