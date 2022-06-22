import {Button, Container, Image, Modal, ModalBody, ModalHeader, ModalTitle, Row, Stack} from "react-bootstrap";
import axios from "axios";
import cremationImage from './images/cremation.jpg';

export default function DeleteRequestModalWithYesOrNo(props) {
    const deletePost = async (id) => {
        await axios.delete(`http://localhost:80/posts/${id}`)
            .then(props.onHide);
        props.onClick();
    }

    return (
        <Modal {...props} size={'lg'} className={'bg-info bg-opacity-50'}>
            <ModalHeader closeButton>
                <Stack gap={2}>
                    <ModalTitle>Are you sure you wanna delete this post?</ModalTitle>
                    <ModalTitle style={{fontSize: 12}}>Clearly check it again! You'll not 've chance to undo this action.</ModalTitle>
                </Stack>
            </ModalHeader>
            <ModalBody className={'text-center'}>
                <Image style={{width: 300, height: 150}} src={cremationImage}></Image>
                <Container className={'display-6 m-2'}>
                    <Row>ID: {props.data.id}</Row>
                    <Row>UserID: {props.data.userId}</Row>
                    <Row>Title: {props.data.title}</Row>
                    <Row>Post: {props.data.body}</Row>
                </Container>
                <Button variant={'success'} className={'m-2'} type={'button'}
                        onClick={() => deletePost(props.data.id)}>Yes</Button>
                <Button variant={'danger'} className={'m-2'} type={'button'} onClick={props.onHide}>No</Button>
            </ModalBody>
        </Modal>
    );
}