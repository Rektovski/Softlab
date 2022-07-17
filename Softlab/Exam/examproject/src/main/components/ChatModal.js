import {Button, Form, InputGroup, Modal} from "react-bootstrap";
import {useContext, useState} from "react";
import api from '../api/Api';
import ChatContext from "../context/ChatContext";
import UserContext from "../context/UserContext";
import "../style/chatStyle.css";

export default function ChatModal(props) {
    const [text, setText] = useState('');
    const {currentChat} = useContext(ChatContext);
    const {user} = useContext(UserContext);

    const sendMessage = (event) => {
        event.preventDefault();
        if (text) {
            api.post(`http://localhost:3040/chat?username=${props.data.username}`, {text})
                .catch(error => console.error(error, 'shecdoma moxda mesijis chapostvisas'));
            setText('');
        }
    }

    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {`${props.data.firstName} ${props.data.lastName}`}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={'bg-light modalBodyCss'}>
                {
                    currentChat.map((chat) => (
                        chat.sender === user.username ? (
                            <div
                                style={{backgroundColor: "pink"}}
                                key={chat.time}
                                className={'px-2 rounded border'}
                            >
                                <div style={{color: "blue"}}>{chat.sender}</div>
                                <div style={{marginLeft: 50}} className={'border'}>{chat.text}</div>
                                <div style={{fontSize: 10}}
                                     className={'d-flex justify-content-center'}>{chat.time}</div>
                            </div>
                        ) : (
                            <div
                                style={{backgroundColor: "orange"}}
                                key={chat.time}
                                className={'px-2 rounded border'}
                            >
                                <div style={{color: "red"}} className={'d-flex justify-content-end'}>{chat.sender}</div>
                                <div style={{marginLeft: 50}} className={'border'}>{chat.text}</div>
                                <div style={{fontSize: 10}}
                                     className={'d-flex justify-content-center'}>{chat.time}</div>
                            </div>
                        )
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
                <Form onSubmit={sendMessage}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder={'type your text'}
                            value={text}
                            onChange={(event) => {
                                setText(event.target.value)
                            }}
                        />
                        <Button type={'submit'}>
                            Button
                        </Button>
                    </InputGroup>
                </Form>
            </Modal.Footer>
        </Modal>
    );
}