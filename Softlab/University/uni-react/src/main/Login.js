import {Button, Card, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import style from './style/loginCss/login.css';
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <Card className={'login'} style={style}>
            <Form>
                <FormGroup className={'p-2'}>
                    <FormLabel>Login: </FormLabel>
                    <FormControl
                        placeholder={'მომხმარებლის სახელი'}
                    />
                </FormGroup>
                <FormGroup className={'p-2'}>
                    <FormLabel>Password: </FormLabel>
                    <FormControl
                        placeholder={'მომხმარებლის პაროლი'}
                        type={'password'}
                    />
                </FormGroup>
                <div className={'d-flex justify-content-end p-2'}>
                    <Button className={'mx-2'} as={Link} to={'/form'}>არ გაქვს აქაუნთი?</Button>
                    <Button>ავტორიზაცია</Button>
                </div>
            </Form>
        </Card>
    );
}