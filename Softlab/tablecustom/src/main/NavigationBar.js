import {Container, Form, Navbar} from "react-bootstrap";
import {useState} from "react";

export default function NavigationBar(props){
    const [themeWord, setThemeWord] = useState('Light');


    const handleSwitch = (bool) => {
        bool ? setThemeWord('Dark') : setThemeWord('Light');
        props.onSwitchClick(bool);
    }

    return (
        <Form>
            <Navbar className={`${props.theme}`}>
                <Container>
                    <Navbar.Brand href="" variant='light'>Navbar</Navbar.Brand>
                    <Form.Check
                        type="switch"
                        label={themeWord}
                        onClick={(event)=>{handleSwitch(event.target.checked)}}
                    />
                </Container>
            </Navbar>
        </Form>
    )
}