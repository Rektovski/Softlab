import {Card, Col, Container, Row} from "react-bootstrap";
import '../../style/galleryStyle/forCard.css';
import todolistImage from '../../images/todolistimg.png';
import galleryImage from '../../images/galleryImage.png';
import websiteLogo from '../../images/websiteLogo.png';
import timer from '../../images/timer.png';
import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";
import '../../style/portfolioStyle/style.css';
import Clock from "./Clock";

export default function Portfolio(){
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`d-grid bg-${theme}`}>
            <Container className={`bg-${theme}`} style={{marginTop: 100}}>
                <Clock/>
                <Row className={'p-5 g-5'}>
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
                    <Col lg={6} md={6} sm={12}>
                        <Card
                            onClick={()=>{window.location.replace('http://localhost:3000/website')}}
                            className={'cardHovering text-center cardBorder'}
                            style={{height: 300}}
                        >
                            <Card.Body>
                                <Card.Text>Website</Card.Text>
                                <img
                                    src={websiteLogo}
                                    alt={`You cant see website's logo`}
                                    className={'imageStyle'}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Card
                            onClick={()=>{window.location.replace('http://localhost:3000/timer')}}
                            className={'cardHovering text-center cardBorder'}
                            style={{height: 300}}
                        >
                            <Card.Body>
                                <Card.Text>Timer</Card.Text>
                                <img
                                    src={timer}
                                    alt={`You cant see website's logo`}
                                    className={'imageStyle'}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Card
                            onClick={()=>{window.location.replace('http://localhost:3000/counter')}}
                            className={'cardHovering text-center cardBorder'}
                            style={{height: 300}}
                        >
                            <Card.Body>
                                <Card.Text>Counter</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Card
                            onClick={()=>{window.location.replace('http://localhost:3000/students')}}
                            className={'cardHovering text-center cardBorder'}
                            style={{height: 300}}
                        >
                            <Card.Body>
                                <Card.Text>Student's List</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Card
                            onClick={()=>{window.location.replace('http://localhost:3000/signup')}}
                            className={'cardHovering text-center cardBorder'}
                            style={{height: 300}}
                        >
                            <Card.Body>
                                <Card.Text>Sign Up Form</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}