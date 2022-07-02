import axios from "axios";
import {useEffect, useState} from "react";
import UserList from "./UserList";
import Layout from "../Layout";
import {Container} from "react-bootstrap";
import AddPost from "./AddPost";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadList().catch((error) => {
            console.error(error)
        });
    }, [])

    const loadList = async () => {
        await axios.get('http://localhost/posts').then((response) => {
            setPosts(response.data);
        });
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost/posts/${id}`)
        await loadList();
    }

    return (
        <Container>
            <Layout/>
            <AddPost/>
            <UserList posts={posts} onClick={handleDelete} loadList={loadList()}/>
        </Container>);
}