import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Outlet} from "react-router";
import {useContext} from "react";
import ThemeContext from "./main/context/ThemeContext";
import {FaSun as DayIcon, FaRegMoon as NightIcon} from 'react-icons/fa';
import UserContext from "./main/context/UserContext";
import {Link} from "react-router-dom";

export default function Layout(){
    const {theme, setTheme} = useContext(ThemeContext);
    const {user, setUser} = useContext(UserContext);

    const handleChangeTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        // window.location.replace('http://localhost:3000/');
        console.log('token is: ', localStorage.getItem('token'));
    }

    return (
        <div>
            <Navbar fixed={'top'} bg={theme} variant={theme}>
                <Container>
                    <Navbar.Brand href={""} onClick={()=>{window.location.replace('http://localhost:3000/')}}>Portfolio</Navbar.Brand>
                    <Nav className="me-auto flex-fill">
                        <Nav.Link as={Link} to={'/todolist'}>ToDo-List</Nav.Link>
                        <Nav.Link as={Link} to={'/gallery'}>Gallery</Nav.Link>
                    </Nav>
                    <div className={''}>
                        {
                            theme === 'dark' ? <Button variant={'outline-primary'} onClick={handleChangeTheme}><DayIcon/></Button> : <Button variant={'outline-primary'} onClick={handleChangeTheme}><NightIcon/></Button>
                        }
                    </div>
                    <NavDropdown title={user.username}>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    );
}