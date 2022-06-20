import UserList from "./UserList";
import SearchForm from "./SearchForm";
import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Main(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
            })
    }, [])

    const handleSubmit = async (params) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users', {params});
        setUsers(res.data);
    }

    return (
        <Container>
            <SearchForm onSubmit={handleSubmit}/>
            <UserList data={users}/>
        </Container>
    );
}