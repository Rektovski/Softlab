import {Button, Container} from "react-bootstrap";
import {useContext, useState} from "react";
import ThemeContext from "../../context/ThemeContext";

export default function Counter() {
    const [value, setValue] = useState(0);
    const {theme} = useContext(ThemeContext);

    const increase = () => {
        setValue(value+1);
    }

    const decrease = () => {
        if(value){
            setValue((value-1));
        }
    }

    return (
        <div className={`p-5 bg-${theme}`} style={{height: "100vh"}}>
            <Container
                className={`d-flex p-5 bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'} justify-content-center`} >
                <Button variant={'outline-danger'} className={'mx-2'} onClick={decrease}>Dislike</Button>
                <div>{value}</div>
                <Button variant={'outline-danger'} className={'mx-2'} onClick={increase}>Like</Button>
            </Container>
        </div>
    )
}