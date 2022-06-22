import {Modal,Button} from "react-bootstrap";

export default function Photo(props){
    return (
        <Modal fullscreen={true}  {...props}>
            <Modal.Header className={'text-center'} closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={"text-center"}>
               <img style={{
                   left: 0,
                   right: 0,
                   top: 100,
                   bottom: 0,
                   margin: "auto"
                }} src={props.url} alt={'fullscreen foto'}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"success"} onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}