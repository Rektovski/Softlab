import {Container, Nav, Navbar} from "react-bootstrap";

export default function Layout(){
    return (
        <div>
            <Navbar sticky={'top'} bg="primary" variant="dark" className={'bg-opacity-75'}>
                <Container>
                    <Navbar.Brand href="/">საქართველოს ტექნიკური უნივერსიტეტი</Navbar.Brand>
                    <Nav className="text-center">
                        <Nav.Link href="http://localhost:3000">მთავარი</Nav.Link>
                        <Nav.Link href="#home">სტუდენტებისთვის</Nav.Link>
                        <Nav.Link href="#pricing">ჩვენს შესახებ</Nav.Link>
                        <Nav.Link href="#features">რეგისტრაცია</Nav.Link>
                        <Nav.Link href="#features">კონტაქტი</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}