import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import {Outlet} from "react-router";
import {useContext} from "react";
import ThemeContext from "./main/context/ThemeContext";
import {FaSun as DayIcon, FaRegMoon as NightIcon, FaYinYang as DayLightIcon} from 'react-icons/fa';

export default function Layout(){
    const {theme, setTheme} = useContext(ThemeContext);

    const handleChangeTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
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
                    <div>
                        {
                            theme === 'dark' ? <Button variant={'outline-primary'} onClick={handleChangeTheme}><DayIcon/></Button> : <Button variant={'outline-primary'} onClick={handleChangeTheme}><NightIcon/></Button>
                        }

                        <span className={'mx-2'}>or</span>

                        <Button classname={'mx-2'} variant={'outline-primary'} onClick={handleChangeTheme}><DayLightIcon/></Button>
                    </div>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    );
}