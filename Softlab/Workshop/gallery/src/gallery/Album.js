import {Modal, Button, Row, Col} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import result from "./Card";
import Photo from './Photo';

export default function Album(props) {
    const [photos, setPhotos] = useState([]);
    const [showPhotoModal, setShowPhotoModal] = useState(false);
    const [currentPhotoUrl, setCurrentPhotoUrl] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                setPhotos(response.data[props.albumId]);
            })
    }, [])

    return (
        <>
            <Modal {...props}>
                <Modal.Header closeButton>
                    <Modal.title>
                        {props.title}
                    </Modal.title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        {photos.map((photo)=>{
                            <Col key={photo.id} sm={12} md={6} lg={3}>
                                <result.ForPhotos
                                    title={photo.title}
                                    url={photo.url}
                                    onClick={()=>{
                                        setCurrentPhotoUrl(photo.thumbnail);
                                        setShowPhotoModal(true);
                                    }}
                                />
                            </Col>
                        })}
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
                thumbnail={currentPhotoUrl}
            />
        </>
    );
}