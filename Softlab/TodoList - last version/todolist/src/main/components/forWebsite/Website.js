import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import {useContext} from "react";
import ThemeContext from "../../context/ThemeContext";
import websiteLogo from '../../images/websiteLogo.png';
import '../../style/websiteStyle/style.css';

export default function Website() {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`bg-${theme} p-5`}>
            <Container className={`bg-${theme} p-5 g-5`} style={{marginTop: 100}}>
                <Card>
                    <Card.Header className={'d-inline-flex justify-content-center align-items-center'}>
                        <Row>
                            <Col lg={6} md={6} sm={12} className={'text-center'}>
                                <img
                                    src={websiteLogo}
                                    alt={`You can't see logo of this site`}
                                    className={'imageStyle'}
                                />
                            </Col>
                            <Col lg={6} md={6} sm={12} className={'text-center'}>
                                <Card.Title>My Website</Card.Title>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row className={'m-2 p-2'}>
                            <Col lg={4} md={4} sm={12}>
                                <aside>
                                    <ListGroup className={'mb-5'}>
                                        <ListGroup.Item>Home</ListGroup.Item>
                                        <ListGroup.Item>Store</ListGroup.Item>
                                        <ListGroup.Item>Price</ListGroup.Item>
                                        <ListGroup.Item>About</ListGroup.Item>
                                        <ListGroup.Item>Contact</ListGroup.Item>
                                    </ListGroup>
                                    <p style={{textAlign: "justify"}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                        It has survived only five centuries.</p>
                                </aside>
                            </Col>
                            <Col lg={8} md={8} sm={12}>
                                <main className={'d-block'}>
                                    <p style={{textAlign: "justify"}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                        It has survived only five centuries.Lorem Ipsum is simply dummy text of the
                                        printing
                                        and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                        It has survived only five centuries.Lorem Ipsum is simply dummy text of the
                                        printing
                                        and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                        It has survived only five centuries.Lorem Ipsum is simply dummy text of the
                                        printing
                                        and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                        It has survived only five centuries.Lorem Ipsum is simply dummy text of the
                                        printing
                                        and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                        It has survived only five centuries.Lorem Ipsum is simply dummy text of the
                                        printing
                                        and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                        It has survived only five centuries.</p>
                                    <p style={{textAlign: "justify"}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                        It has survived only five centuries.</p>
                                </main>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <p className={'text-center'}>
                            Footer inc ©2022
                        </p>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
}