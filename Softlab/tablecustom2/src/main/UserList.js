import {Button, Table} from "react-bootstrap";
import {TiDeleteOutline as Delete} from 'react-icons/ti';
import listHover from './style/listHover.css'
import {useContext} from "react";
import ThemeContext from "./ThemeContext";

export default function UserList(props){
    const {theme, setTheme} = useContext(ThemeContext);
    
    return (
        <Table className={`mt-5 text-${theme === 'dark' ? 'light' : 'dark'}`}>
            <thead>
            <tr>
                <th>Id</th>
                <th>UserId</th>
                <th>Title</th>
                <th>Post</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                props.posts.map((post)=>(
                    <tr className={'line'} style={listHover} key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td>
                            <Button style={{color: 'red', backgroundColor: 'dark'}} className={'border border-rounded'} type={'button'} size={'lg'} onClick={()=>{props.onClick(post.id)}}>
                                <Delete/>
                            </Button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    );
}