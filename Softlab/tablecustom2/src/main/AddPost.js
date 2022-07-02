import {Button, Container} from "react-bootstrap";
import {useState, useContext} from "react";
import ModalForAddingPost from "./ModalForAddingPost";
import ThemeContext from "./ThemeContext";

export default function AddPost() {
    const {theme, setTheme} = useContext(ThemeContext);
    const [show, setShow] = useState(false);

    const openModal = () => {
        setShow(prevState => {
            return !prevState;
        })
    }

    const closeModal = () => {
        setShow(prevState => {
            return !prevState
        })
    }

    return (
        <Container className={`text-center my-3 `}>
            <div>
                <Button
                    variant={'primary'}
                    className={'border border-rounded border-info'}
                    type={'button'}
                    onClick={openModal}>Add
                Post</Button></div>

            <ModalForAddingPost
                show={show}
                onHide={closeModal}
            />
        </Container>
    )
}