import {Modal} from "bootstrap";

export default function Photo(props){
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img style={{width:200, height:200}} src={props.thumbnail} alt={'fullscreen photo'}/>
            </Modal.Body>
        </Modal>
    );
}