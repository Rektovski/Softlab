import {Button, Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import axios from "axios";

export default function DeleteRequestModalWithYesOrNo(props) {
    const deletePost = async (id) => {
        await axios.delete(`http://localhost:80/posts/${id}`)
            .then(() => window.location.reload());
    }

    return (
        <Modal {...props} className={'bg-info bg-opacity-50'}>
            <ModalHeader closeButton>
                <ModalTitle>Are you sure you wanna delete the post?</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Button variant={'success'} className={'mx-2'} type={'button'}
                        onClick={() => deletePost(props.id)}>Yes</Button>
                <Button variant={'danger'} className={'mx-2'} type={'button'} onClick={props.onHide}>No</Button>
            </ModalBody>
        </Modal>
    );
}