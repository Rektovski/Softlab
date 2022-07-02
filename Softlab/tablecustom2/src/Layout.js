import {Container, Form, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useContext} from "react";
import ThemeContext from "./main/ThemeContext";

export default function Layout(){
    const {theme, setTheme} = useContext(ThemeContext);

    const changeTheme = (event) => {
        event.target.checked ? setTheme('dark') : setTheme('light');
    }

    return (
        <Form>
            <Navbar bg={theme} variant={theme} expand={"lg"}>
                <Container >
                    <Navbar.Brand as={Link} to={'/'}>Home</Navbar.Brand>
                    <Form.Check
                        type="switch"
                        label="Change this when theme is light/dark"
                        onClick={(event)=>{changeTheme(event)}}
                    />
                </Container>
            </Navbar>
        </Form>
    );
}