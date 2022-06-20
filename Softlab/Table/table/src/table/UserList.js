import {Table} from "react-bootstrap";

export default function UserList({data=[]}) {
    return (
        <>
            <Table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((user) => (
                        <tr key={user.id}>
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