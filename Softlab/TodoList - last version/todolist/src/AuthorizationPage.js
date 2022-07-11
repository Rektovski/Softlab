import {Alert, Button, Card, Form} from "react-bootstrap";
import {useState} from "react";
import './main/style/todolistStyle/authorizationPage.css';
import axios from "axios";

export default function AuthorizationPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async (event) => {
        event.preventDefault();
        await axios
            .post('http://localhost:3030/login', {username, password})
            .then((response) => {
                localStorage.setItem('token', response.data.token);
            })
            .catch(error => {
                error.message === "Request failed with status code 401" ? props.onError(error.message) : console.error(error);
            });
        setTimeout(()=>{
            window.location.reload();
        },3000);
    }

    return (
        <div className={'centeredLogin'}>
            <Card className={'cardHovering rounded p-5 border border-1 border-info'}>
                {
                    // 401 Error Alert
                    props.onError && props.error === 'Request failed with status code 401' &&
                    <Alert variant={"danger"}>{'Incorrect details! Auto-Reload in 3 seconds...'}</Alert> ||
                    localStorage.getItem('token') && <Alert variant={"success"}>{'Connected'}</Alert>
                }

                <Form onSubmit={login}>
                    <Form.Group className={'m-2'}>
                        <Form.Label className={'m-2'}>Username: </Form.Label>
                        <Form.Control
                            placeholder={'Type your username'}
                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value)
                            }}
                        />
                    </Form.Group>
                    <Form.Group className={'m-2'}>
                        <Form.Label className={'m-2'}>Password: </Form.Label>
                        <Form.Control
                            type={'password'}
                            placeholder={'Type your password'}
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
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