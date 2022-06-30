import {
    Button,
    Container,
    Form,
    FormControl,
    InputGroup,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle
} from "react-bootstrap";
import {useState} from "react";

export default function AddPostModal(props) {
    const startingValue = {
        userId: '',
        title: '',
        body: '',
    };

    const [show, setShow] = useState(false);
    const [post, setPost] = useState(startingValue);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost({...post, [name]: value});
    }

    const removeEmptyInputData = (post) => {
        return Object.entries(post).reduce((object, [key, value]) => {
            if (post[key]) object[key] = value;
            return object;
        }, {})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(removeEmptyInputData(post));
        setShow(false);
        setPost(startingValue);
    }

    return (
        <Container className={`text-center my-2 ${props.theme}`}>
            <Button onClick={() => {
                setShow(true)
            }} type={'button'} className={'btn-primary'}>Add Post</Button>

            <Modal show={show} onHide={() => {
                setShow(false)
            }}>
                <ModalHeader closeButton>
                    <ModalTitle>Add Post</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        User:
                        <InputGroup className="my-2">
                            <FormControl
                                placeholder="Type your UserId"
                                name={'userId'}
                                value={post.userId}
                                onChange={handleChange}
                            />
                        </InputGroup>
                        Title:
                        <InputGroup className="my-2">

                            <FormControl
                                placeholder="Type your post's title"
                                name={'title'}
                                value={post.title}
                                onChange={handleChange}
                            />
                        </InputGroup>
                        Post:
                        <InputGroup className="my-2">
                            <FormControl
                                as={'textarea'}
                                style={{maxHeight: 400, minHeight: 100}}
                                placeholder="Type your post"
                                name={'body'}
                                value={post.body}
                                onChange={handleChange}
                            />
                        </InputGroup>
                        <div className={'d-flex justify-content-end'}>
                            <Button type={'submit'}>Submit</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </Container>);
}