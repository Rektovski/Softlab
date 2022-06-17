import UserList from "./UserList";
import SearchForm from "./SearchForm";
import {Container} from "react-bootstrap";

export default function Main(){
    return (
        <Container>
            <SearchForm/>
            <UserList/>
        </Container>
    );
}