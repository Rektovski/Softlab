import {Container, Row, Col} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import result from "./Card";
import Album from "./Album";

function Gallery(){
    const [Albums, setAlbums ] = useState([]);
    const [show,setShow] = useState(false);
    const [currentAlbum,setCurrentAlbum] = useState('');

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((response)=>{
                setAlbums(response.data);
            })
    },[]);

    return (
        <Container>
            <Row>
                {Albums.map((Album)=>(
                    <Col key={Album.id} sm={12} md={6} lg={4}>
                        <result.ForAlbums
                            title={Album.title}
                            albumId={Album.id}
                            onClick={() => {
                                setCurrentAlbum(Album.id);
                                setShow(true);
                            }}
                        />
                    </Col>
                ))}
            </Row>

            <Album
                show={show}
                onHide={()=>{setShow(false)}}
                albumId={currentAlbum}
            />
        </Container>
    );
}

export default Gallery;