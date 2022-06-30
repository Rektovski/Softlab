import {Button, Container, Table} from "react-bootstrap";
import {FaWindowClose as DeleteIcon} from 'react-icons/fa';

export default function UserList(props) {
    return (
        <Container className={`my-2 `}>
            <Table className={`text-center`}>
                <thead>
                <tr className={`${props.theme}`}>
                    {/*<th>Id</th>*/}
                    <th>UserId</th>
                    <th>Title</th>
                    <th>Post</th>
                    <th>Example</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.data.map((post)=>(
                        <tr key={post.id} className={`mx-2 ${props.theme}`}>
                            {/*<td>{post.id}</td>*/}
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <Button variant={"primary"} type={'button'} size={'sm'} onClick={()=>{props.onClick(post.id)}}>
                                    <DeleteIcon/>
                                </Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </Container>
    );
}