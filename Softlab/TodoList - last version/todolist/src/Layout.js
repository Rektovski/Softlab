import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Outlet} from "react-router";
import {useContext} from "react";
import ThemeContext from "./main/context/ThemeContext";
import {FaSun as DayIcon, FaRegMoon as NightIcon, FaYinYang as DayLightIcon} from 'react-icons/fa';
import UserContext from "./main/context/UserContext";

export default function Layout(){
    const {theme, setTheme} = useContext(ThemeContext);
    const {user, setUser} = useContext(UserContext);

    const handleChangeTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <div>
            <Navbar bg={theme} variant={theme}>
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto flex-fill">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <div className={'flex-fill'}>
                        {
                            theme === 'dark' ? <Button variant={'outline-primary'} onClick={handleChangeTheme}><DayIcon/></Button> : <Button variant={'outline-primary'} onClick={handleChangeTheme}><NightIcon/></Button>
                        }
                        <span className={'mx-2'}>or</span>
                        <Button className={'mx-2'} variant={'outline-primary'} onClick={handleChangeTheme}><DayLightIcon/></Button>
                    </div>
                    <NavDropdown title={user}>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    );
}