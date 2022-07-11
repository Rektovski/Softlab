import {Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";

export default function ModalForPhoto(props){
    return (
        <Modal fullscreen {...props}>
            <ModalHeader closeButton>
                <div>
                    <ModalTitle>{props.data.title}</ModalTitle>
                </div>
                <div>
                    <ModalTitle>{props.data.id}</ModalTitle>
                    </div>
            </ModalHeader>
            <ModalBody className={'text-center'}>
                <img src={props.data.url} alt={`If you see this it means, that you can't see the foto`}/>
            </ModalBody>
        </Modal>
    )
}