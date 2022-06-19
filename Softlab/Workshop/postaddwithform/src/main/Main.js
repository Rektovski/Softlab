import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Main() {
    const startingValues = {
        userId: '',
        id: '',
        title: '',
        body: ''
    }

    const [values, setValues] = useState(startingValues);

    // for getting data from server
    const [infoFromServer,setInfoFromServer] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost/posts/')
            .then((res)=>{
                setInfoFromServer(res.data);
            })
    },[])

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
        console.log(`Post has been submitted.`); // todo why does not ${values} work in console.log()?
    }

    // onUpdate{put}
    // todo line: 97
    const put = async (event) => {
        event.preventDefault();
        if(values.id !== infoFromServer.id || values.userId !== infoFromServer.id){
            console.log('There is no such id or userId');
            return false;
        }
        await axios.put(`https://localhost/posts/${values.id}`,values);
        console.log(`Post #${values.id} has been updated`);
    }

    return (
        <Container className={'mt-2'}>
            <Form onSubmit={post} onReset={resetValues} className={'text-center'}>
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
                    <Button className={'m-1'} variant={'success'} type={'submit'}>Post</Button>
                    <Button className={'m-1'} variant={'success'} type={'button'} disabled={true}>Update</Button>
                </div>
            </Form>
        </Container>
    );
}