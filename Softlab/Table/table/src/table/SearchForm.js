import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

export default function SearchForm() {
    const startingValues = {
        name: '',
        username: '',
        email: '',
    }

    const [values, setValues] = useState(startingValues);

    const resetValues = () => {
        setValues(startingValues);
    }

    const lastChange = async (event) => {
        event.preventDefault();
        console.log(values);
        const res = await axios.get('https://jsonplaceholder.typicode.com/users', {
            params: values
        });
        console.log(res.data);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
    }

    return (
        <Form onSubmit={lastChange} onReset={resetValues}>
            <Row className={'mt-3'}>
                <Col>
                    <Form.Group className={'mb-3'}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            placeholder={'Enter name'}
                            value={values.name}
                            name={'name'}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className={'mb-3'}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            placeholder={'Enter username'}
                            value={values.username}
                            name={'username'}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className={'mb-3'}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            placeholder={'Enter email'}
                            value={values.email}
                            name={'email'}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <div className={'d-flex p-1 rounded justify-content-end bg-light'}>
                <Button className={'m-1'} variant={'danger'} type={'reset'}>Reset</Button>
                <Button className={'m-1'} variant={'success'} type={'submit'}>Search</Button>
            </div>
        </Form>
    );
}