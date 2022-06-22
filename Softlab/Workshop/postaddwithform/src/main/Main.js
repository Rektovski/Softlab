import {Container} from "react-bootstrap";
import PostAddingModal from "./AddPostModal";
import Database from "./Database";
import {useState} from "react";

export default function Main() {
    const [check, setCheck] = useState(false);

    const reverseCheck = () => {
        setCheck(!check);
    }

    return (
        <Container>
            <PostAddingModal onSubmit={reverseCheck}/>
            <Database sensor={check} dataListRefresh={reverseCheck}/>
        </Container>
    );
}