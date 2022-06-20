import {Button, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import DeleteRequestModalWithYesOrNo from "./DeleteRequestModalWithYesOrNo";

export default function Database({sensor}) {
    const [dataBase, setDataBase] = useState([]);
    const [currentId, setCurrentId] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.get('http://localhost/posts')
            .then((res) => {
                setDataBase(res.data);
            })
    }, [sensor]);


    return (
        <>
            <Table className={'mt-3'}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>UserID</th>
                    <th>Title</th>
                    <th>Post</th>
                </tr>
                </thead>
                <tbody>
                {
                    dataBase.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.userId}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                            <td>
                                <Button
                                    variant={'danger'}
                                    type={'button'}
                                    onClick={
                                        () => {
                                            setCurrentId(data.id);
                                            setShow(true);
                                        }
                                    }
                                >Delete</Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>

            <DeleteRequestModalWithYesOrNo
                show={show}
                onHide={()=>{setShow(false)}}
                id={currentId}
            />
        </>
    );
}