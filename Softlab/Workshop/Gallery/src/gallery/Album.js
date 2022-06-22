import {Modal, Button, Row, Col, ModalTitle} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import result from "./Card";
import Photo from './Photo';

export default function Album(props) {
    const [photos, setPhotos] = useState([]);
    const [photoName,setPhotoName] = useState('');
    const [showPhotoModal, setShowPhotoModal] = useState(false);
    const [currentPhotoUrl, setCurrentPhotoUrl] = useState('');

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${props.album}`)
            .then((response) => {
                setPhotos(response.data);
            })
    }, [props.album])

    return (
        <>
            <Modal size={"xl"} sm={12} md={6} lg={6} className={"bg-secondary bg-opacity-50"} {...props}>
                <Modal.Header closeButton>
                    <ModalTitle>
                        {props.title}
                    </ModalTitle>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        {photos.map((photo)=>(
                            <Col key={photo.id} sm={12} md={6} lg={6}>
                                <result.ForPhotos
                                    title={photo.title}
                                    url={photo.thumbnailUrl}
                                    onClick={()=>{
                                        setCurrentPhotoUrl(photo.url);
                                        setShowPhotoModal(true);
                                        setPhotoName(photo.title);
                                    }}
                                />
                            </Col>
                        ))}
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Photo
                show={showPhotoModal}
                onHide={()=>{setShowPhotoModal(false)}}
                url={currentPhotoUrl}
                title={photoName}
            />
        </>
    );
}