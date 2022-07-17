import {Button, Container, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import '../style/loginPageStyle.css';
import {useState} from "react";
import axios from "axios";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const authorization = async (event) => {
        event.preventDefault();
        await axios
            .post('http://localhost:3040/login', {username, password})
            .then((response) => {
                localStorage.setItem('token', response.data.token);
            })
            .catch((error) => {
                console.error(error, "shecdoma moxda user parolis gadagzavnisas")
            });
        window.location.reload();
    }

    return (
        <div className={'centeredLogin'}>
            <Container>
                <Form onSubmit={authorization}>
                    <FormGroup className={'my-2'}>
                        <FormLabel>Username:</FormLabel>
                        <FormControl
                            placeholder={'enter your username'}
                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value)
                            }}
                        />
                    </FormGroup>
                    <FormGroup className={'my-2'}>
                        <FormLabel>Password:</FormLabel>
                        <FormControl
                            placeholder={'enter your username'}
                            type={'password'}
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                        />
                    </FormGroup>
                    <div className={'d-flex justify-content-end'}>
                        <Button variant={'primary'} type={'submit'}>Sign in</Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}