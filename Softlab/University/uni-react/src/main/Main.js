import Aside from "./Aside";
import {Col, Container, Row} from "react-bootstrap";
import Posts from "./Posts";

export default function Main(){
    return (
        <Container className={'mt-2'}>
            <Row>
                <Col className={'col col-sm-12 col-md-12 col-lg-4 m-2'}>
                    <Aside/>
                </Col>
                <Col className={'col col-sm-12 col-md-12 col-lg-7 m-2'}>
                    <Posts/>
                </Col>
            </Row>
        </Container>
    );
}