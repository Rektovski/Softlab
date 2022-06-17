import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";

export default function UserList(){
    const [users, setUsers]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                setUsers(response.data);
            })
    },[])

    return (
        <>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user,index=1)=>(
                        <tr key={user.id}>
                            <td>{++index}</td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </>
    );
}