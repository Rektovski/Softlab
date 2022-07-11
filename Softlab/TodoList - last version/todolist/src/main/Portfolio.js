import {Card, Col, Container, Row} from "react-bootstrap";
import './style/galleryStyle/forCard.css';
import todolistImage from './images/todolistimg.png';
import galleryImage from './images/galleryImage.png'
import {useContext} from "react";
import ThemeContext from "./context/ThemeContext";
import './style/portfolioStyle/style.css';

export default function Portfolio(){
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`bg-${theme}`}>
            <Container className={`bg-${theme}`} style={{height: "100vh"}}>
                <Row className={'m-5 p-5 g-5'}>
                    <Col lg={6} md={6} sm={12}>
                        <Card
                            onClick={()=>{window.location.replace('http://localhost:3000/todolist')}}
                            className={'cardHovering text-center cardBorder'}
                            style={{height: 300}}
                        >
                            <Card.Body >
                                <Card.Text>Todolist</Card.Text>
                                <img
                                    src={todolistImage}
                                    alt={`You cant see todolist's foto`}
                                    className={'imageStyle'}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Card
                            onClick={()=>{window.location.replace('http://localhost:3000/gallery')}}
                            className={'cardHovering text-center cardBorder'}
                            style={{height: 300}}
                        >
                            <Card.Body>
                                <Card.Text>Gallery</Card.Text>
                                <img
                                    src={galleryImage}
                                    alt={`You cant see gallery's foto`}
                                    className={'imageStyle'}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}