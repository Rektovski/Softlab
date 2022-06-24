import {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import PostStyle from './style/mainCss/post.css';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/posts')
            .then((res) => {
                setPosts(res.data);
            })
            .catch((error) => console.error(`სერვერი გასტარტე "${error}"`))
    }, []);

    return (
        <>
            {
                <Table>
                    <thead>
                    <tr className={'text-center'}>
                        <th>ახალი ამბები</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        posts.map((post) => (
                            <tr style={PostStyle} key={post.id} className={'main-post d-grid m-2 p-2 border border-info border-1'}>
                                <td className={'text-center'}>
                                    {`"სათაური": ${post.title}`}
                                </td>
                                <td style={{textAlign: "justify"}}>
                                    {`"პოსტი": ${post.body}`}
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            }
        </>
    );
}