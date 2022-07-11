import {Card, Col, Container, Row} from "react-bootstrap";
import './style/galleryStyle/forCard.css';
import todolistImage from './images/todolistimg.png';
import galleryImage from './images/galleryImage.png'

export default function Portfolio(){
    return (
        <div>
            <Container style={{marginTop:100}}>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <Card
                            onClick={()=>{window.location.replace('http://localhost:3000/todolist')}}
                            className={'cardHovering text-center'}
                            style={{height: 300}}
                        >
                            <Card.Body >
                                <Card.Text>Todolist</Card.Text>
                                <img style={{height: 200, width: 200}} src={todolistImage} alt={`You cant see todolist's foto`} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Card
                            onClick={()=>{window.location.replace('http://localhost:3000/gallery')}}
                            className={'cardHovering text-center'}
                            style={{height: 300}}>
                            <Card.Body>
                                <Card.Text>Gallery</Card.Text>
                                <img style={{height: 200, width: 200}} src={galleryImage} alt={`You cant see gallery's foto`} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}