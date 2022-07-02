import {Button, Form, FormControl, InputGroup, Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import {useState, useContext} from "react";
import axios from "axios";
import ThemeContext from "./ThemeContext";

export default function ModalForAddingPost(props){
    const {theme, setTheme} = useContext(ThemeContext);
    const startingValue = {
        userId: '',
        title: '',
        body: '',
    }

    const [posts, setPosts] = useState([]);
    const [values, setValues] = useState(startingValue);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues((prevState)=>{
            return {...prevState, [name]: value}
        })
    }

    const loadList = async () => {
        await axios.get('http://localhost/posts').then((response) => {
            setPosts(response.data);
        }).catch((error)=>{console.error(error)});
    }

    const addPost = async () => {
        await axios.post('http://localhost/posts',values).catch((error)=>{console.error(error, 'Serveri ar gaqvs chartuli')});
        setValues((prevState)=>{
            prevState = startingValue;
            return prevState;
        })
        await loadList();
    }

    return (
        <Modal {...props} className={`bg-opacity-50 `}>
            <ModalHeader closeButton>
                <ModalTitle className={``}>Add Post</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form className={``}>
                    UserId:
                    <InputGroup className="my-2">
                        <FormControl
                            placeholder="Type your userId"
                            name={'userId'}
                            value={values.userId}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    Title:
                    <InputGroup className="my-2">
                        <FormControl
                            placeholder="Type your userId"
                            name={'title'}
                            value={values.title}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    Post:
                    <InputGroup className="my-2 ">
                        <FormControl
                            as={'textarea'}
                            style={{maxHeight: 400, minHeight: 100, resize: "vertical"}}
                            placeholder="Type your userId"
                            name={'body'}
                            value={values.body}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <div className={'d-flex'}>
                        <span className={'flex-fill'}></span>
                        <Button variant={'primary'} className={''} type={'button'} onClick={addPost}>Add Post</Button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    )
}