import UserList from "./UserList";
import {useEffect, useState} from "react";
import axios from "axios";
import AddPostModal from "./AddPostModal";
import {Container} from "react-bootstrap";
import NavigationBar from "./NavigationBar";

export default function Main() {
    const [posts, setPosts] = useState([]);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        loadList().catch(error => console.error(error));
    }, [])

    const loadList = async () => {
        await axios.get('http://localhost/posts')
            .then((response) => {
                setPosts(response.data);
            })
    }

    const handleClickAddPost = async (params) => {
        await axios.post('http://localhost/posts/',params);
        await loadList();
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost/posts/${id}`);
        await loadList();
    }

    const themeChange = (bool) => {
        // true == dark  || false == light
        bool ? setTheme('dark') : setTheme('light');
    }

    return (
        <Container className={theme}>
            <NavigationBar theme={theme} onSwitchClick={themeChange}/>
            <AddPostModal theme={theme} onSubmit={handleClickAddPost}/>
            <UserList theme={theme} onClick={handleDelete} data={posts}/>
        </Container>
    );
}