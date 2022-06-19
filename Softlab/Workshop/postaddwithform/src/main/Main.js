import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

export default function Main() {
    const startingValues = {
        userId: '',
        id: '',
        title: '',
        body: ''
    }

    const [values, setValues] = useState(startingValues);

    //onReset
    const resetValues = () => {
        setValues(startingValues);
    }

    // onChange
    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
    }

    // onSubmit{post}
    const post = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost/posts/', values);
        console.log(`Post has been submitted.`); // todo რატომ არ მუშაობს ამ კონსოლში ${values}
    }

    // onSubmit{update}
    const put = async (event) => {
        event.preventDefault();
        await axios.put(`http://localhost/posts/${values.id}`, values);
        console.log("Post has been updated")
    }

    return (
        <Container className={'mt-2'}>
            <Form onReset={resetValues} onSubmit={(event) => {
                event.preventDefault()
            }} className={'text-center'}>
                <Row className={'mb-2'}>
                    <Col>
                        <Form.Group>
                            <Form.Label>userId</Form.Label>
                            <Form.Control
                                placeholder={'Type userId'}
                                value={values.userId}
                                name={'userId'}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>id</Form.Label>
                            <Form.Control
                                placeholder={'Type id'}
                                value={values.id}
                                name={'id'}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className={'mb-2'}>
                    <Col>
                        <Form.Group>
                            <Form.Label>title</Form.Label>
                            <Form.Control
                                placeholder={'Type title'}
                                value={values.title}
                                name={'title'}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className={'mb-2'}>
                    <Col>
                        <Form.Group>
                            <Form.Label>body</Form.Label>
                            <Form.Control
                                placeholder={'Type body'}
                                value={values.body}
                                name={'body'}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <div className={'d-flex p-1 rounded justify-content-end bg-light'}>
                    <Button className={'m-1'} variant={'danger'} type={'reset'}>Reset</Button>
                    <Button className={'m-1'} variant={'success'} type={'submit'} onSubmit={post}>Post</Button>
                    <Button className={'m-1'} variant={'info'} type={'submit'} onSubmit={put}>Update</Button>
                </div>
            </Form>
        </Container>
    );
}