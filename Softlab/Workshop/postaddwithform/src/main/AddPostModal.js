import {Button, Container, Form, FormControl, FormLabel, Modal} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

export default function PostAddingModal({onSubmit}) {
    const startingValue = {
        userId: '',
        title: '',
        body: '',
    }

    const [data, setData] = useState(startingValue);

    const getDataFromInput = (event) => {
        const {name, value} = event.target;
        setData({...data, [name]: value});
    }

    const addPost = async (event) => {
        event.preventDefault();
        const params = removeEmptyData(data);
        await axios.post('http://localhost/posts/',params);
        onSubmit();
        setShow(false);
        setData(startingValue);
    }

    const removeEmptyData = (data) => {
        return Object.entries(data).reduce((object, [key, value]) => {
            if (value) object[key] = value;
            return object;
        }, {});
    }

    // For Modal and its Button
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className={'mt-2'}>
            <Button variant={'success'} onClick={handleShow}>
                Wanna Add Post?
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className={'text-center'}>Fill the blank to add the post into the
                        database</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={addPost}>
                        <Form.Group className={'pb-2'}>
                            <FormLabel className={'mx-2'}>UserID</FormLabel>
                            <FormControl
                                placeholder={'Enter your userId'}
                                name={'userId'}
                                value={data.userId}
                                onChange={getDataFromInput}
                            />
                        </Form.Group>
                        <Form.Group className={'pb-2'}>
                            <FormLabel className={'d-flex justify-content-end mx-2'}>Title</FormLabel>
                            <FormControl
                                placeholder={'Enter your title'}
                                name={'title'}
                                value={data.title}
                                onChange={getDataFromInput}
                            />
                        </Form.Group>
                        <Form.Group>
                            <FormLabel className={'pb-2 mx-2'}>Post</FormLabel>
                            <FormControl
                                placeholder={'Enter your body'}
                                name={'body'}
                                value={data.body}
                                onChange={getDataFromInput}
                            />
                        </Form.Group>
                        <div className={'mt-2 d-flex justify-content-end'}>
                            <Button variant={'success'} type={'submit'}>Add Post</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
}