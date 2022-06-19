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

    // for getting current data from the Form to push it into the server
    const [values, setValues] = useState(startingValues);

    // for getting data from server
    const [infoFromServer,setInfoFromServer] = useState({});

    useEffect(()=>{
        axios.get('http://localhost/posts')
            .then((res)=>{
                setInfoFromServer(res.data);
            })
    },[infoFromServer])

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
        await axios.post('http://localhost/posts', values);
        console.log(`Post has been submitted.`); // todo why does not ${values} work in console.log()?
    }

    // onUpdate{put}
    // todo line: 112
    const put = async (event) => {
        // We have to check whether the userId we've inputted is available at server before updated post.
        /*if(infoFromServer){
            console.log('There is no such userId');
            return false;
        }*/
        await axios.put(`https://localhost/posts/${values.id}`,values);
       // console.log(`Post #${value.userId} has been updated`);
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
                    <Button className={'m-1'} variant={'danger'} type={'reset'}>Reset Form</Button>
                    <Button className={'m-1'} variant={'success'} type={'submit'}>Add Post</Button>
                    <Button className={'m-1'} variant={'success'} type={'button'} onClick={put}>Update Post</Button>
                </div>
            </Form>
        </Container>
    );
}