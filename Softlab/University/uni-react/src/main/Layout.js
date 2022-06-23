import {Container, Nav, Navbar} from "react-bootstrap";
import RegistrationForm from "./RegistrationForm";

export default function Layout(){
    return (
        <div>
            <Navbar sticky={'top'} bg="primary" variant="dark" className={'bg-opacity-75'} expand="lg">
                <Container className={'text-center'}>
                    <Navbar.Brand href="/" className={'text-center'}>საქართველოს ტექნიკური უნივერსიტეტი</Navbar.Brand>
                    <Nav >
                        <Nav.Link href="http://localhost:3000">მთავარი</Nav.Link>
                        <Nav.Link href="#" disabled>სტუდენტებისთვის</Nav.Link>
                        <Nav.Link href="#" disabled>ჩვენს შესახებ</Nav.Link>
                        <Nav.Link href={"#"} disabled>რეგისტრაცია</Nav.Link> {/* todo Registration Button + Form Component*/}
                        <Nav.Link href="http://gtu.ge/Contact/">კონტაქტი</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}