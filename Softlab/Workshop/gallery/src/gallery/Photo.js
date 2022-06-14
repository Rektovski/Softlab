import {Modal} from "bootstrap";

export default function Photo(props){
    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img style={{width:200, height:200}} src={props.thumbnail} alt={'fullscreen foto'}/>
            </Modal.Body>
        </Modal>
    );
}