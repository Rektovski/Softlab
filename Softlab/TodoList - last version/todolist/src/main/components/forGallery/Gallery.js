import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";
import ThemeContext from "../../context/ThemeContext";
import "../../style/galleryStyle/forCard.css";
import ModalForAlbum from "./ModalForAlbum";

export default function Gallery() {
    const [albums, setAlbums] = useState([]);
    const {theme} = useContext(ThemeContext);
    const [show, setShow] = useState(false);
    const [currentAlbum, setCurrentAlbum] = useState({});

    useEffect(() => {
        loadAlbums().catch(error => console.error(error));
    }, [])

    const loadAlbums = async () => {
        try {
            await axios
                .get('https://jsonplaceholder.typicode.com/albums')
                .then(response => setAlbums(response.data));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={`bg-${theme} mb-5`}>
            <Container className={'my-5'}>
                <Row className={'g-5 my-5'}>
                    {
                        albums.map((album) => (
                            <Col sm={3} key={album.id}>
                                <Card className={'cardHovering text-center'} style={{height: 300}}
                                      onClick={()=>{
                                          setShow(true);
                                          setCurrentAlbum(album);
                                      }}
                                >
                                    <Card.Header>
                                        <Card.Title>
                                            <Card.Text>Album: {album.title}</Card.Text>
                                            <Card.Text>#: {album.id}</Card.Text>
                                        </Card.Title>
                                    </Card.Header>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>

            <ModalForAlbum
                show={show}
                onHide={()=>{setShow(false)}}
                data={currentAlbum}
            />
        </div>
    )
}