import {Card, Col, Modal, ModalBody, ModalHeader, ModalTitle, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import '../../style/galleryStyle/forCard.css';
import ModalForPhoto from "./ModalForPhoto";

export default function ModalForAlbum(props) {
    const [photos, setPhotos] = useState([]);
    const [photo, setPhoto] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        try {
            axios
                .get(`https://jsonplaceholder.typicode.com/photos?albumId=${props.data.id}`)
                .then(response => setPhotos(response.data));
        } catch (error) {
            console.error(error, 'shecdoma moxda fotoebis gamotanisas');
        }
    })


    return (
        <div>
            <Modal fullscreen {...props}>
                <ModalHeader closeButton>
                    <ModalTitle>{`${props.data.id}: ${props.data.title}`}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        {
                            photos.map((photo) => (
                                <Col sm={12} md={6} lg={6} key={photo.id}>
                                    <Card className={'cardHovering m-5 p-5 g-5'} style={{height: 400}}
                                          onClick={() => {
                                              setShow(true);
                                              setPhoto(photo);
                                          }}
                                    >
                                        <Card.Header>
                                            <Card.Title>
                                                <Card.Text>{`Photo#: ${photo.id}`}</Card.Text>
                                                <Card.Text>{photo.title}</Card.Text>
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body className={'text-center'}>
                                            <img src={photo.thumbnailUrl}
                                                 alt={`if you see this, it means that you can't see the foto`}/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </ModalBody>
            </Modal>

            <ModalForPhoto
                show={show}
                onHide={()=>{setShow(false)}}
                data={photo}
            />
        </div>
    )
}