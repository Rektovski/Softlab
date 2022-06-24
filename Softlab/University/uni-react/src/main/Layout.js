import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Layout(){
    return (
        <div>
            <Navbar sticky={'top'} bg="primary" variant="dark" className={'bg-opacity-75'} expand="lg">
                <Container className={'text-center'}>
                    {/*todo When zooming in or using mobile screen navbar must be as menu*/}
                    <Navbar.Brand href="/" className={'text-center'}>საქართველოს ტექნიკური უნივერსიტეტი</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="http://localhost:3000">მთავარი</Nav.Link>
                        <Nav.Link href="#" disabled>სტუდენტებისთვის</Nav.Link>
                        <Nav.Link href="#" disabled>ჩვენს შესახებ</Nav.Link>
                        <Nav.Link as={Link} to={'/form'}>რეგისტრაცია</Nav.Link>
                        <Nav.Link as={Link} to={'/login'}>ავტორიზაცია</Nav.Link>
                        <Nav.Link as={Link} to={'/contact'}>კონტაქტი</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}