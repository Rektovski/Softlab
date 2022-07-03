import {Button, Container, Spinner} from "react-bootstrap";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {Form, ListGroup} from "react-bootstrap";
import LoadingContext from "./LoadingContext";
import {FaRegEdit as EditIcon, FaWindowClose as DeleteIcon} from 'react-icons/fa';

export default function Main() {
    const [tasks, setTasks] = useState([]);
    const {loading, setLoading} = useContext(LoadingContext);

    useEffect(() => {
        loadTasks().catch((error) => {
            console.error(error)
        })
    }, [])

    const loadTasks = async () => {
        try {
            setLoading(true);
            const data = await axios
                .get('http://localhost:3030/todos')
                .then((response) => {
                    const done = response.data.filter((object) => object.done);
                    const undone = response.data.filter((object) => !object.done);
                    setTasks((prevState) => {
                        prevState = [...done, ...undone];
                        return prevState;
                    });
                });
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    const toggleDone = (id) => async (event) => {
        setLoading(true);
        const task = tasks.find((object) => object.id === id);
        task.done = event.target.checked;
        const update = await axios.put(`http://localhost:3030/todos/${id}`, task);
        setLoading(false);
        await loadTasks();
        setTasks((prevState) => {
            const done = prevState.filter((object) => object.done);
            const undone = prevState.filter((object) => !object.done);
            return [...done, ...undone];
        })
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3030/todos/${id}`).catch((error) => {
            console.error(error, 'shecdoma moxda task washlis dros')
        });
        await loadTasks();
    }

    const handleEdit = async (id) => {
        const task = tasks.find((object) => object.id === id);
        const result = window.prompt('hello', task.text);
        task.text = result;
        if (result) {
            const update = await axios.put(`http://localhost:3030/todos/${id}`, task).catch((error) => {
                console.error(error, 'shecdoma moxda task is ganaxlebis dros')
            });
            await loadTasks();
        }
    }

    const handleAddPost = async () => {
        const result = window.prompt('Type post');
        const post = await axios.post('http://localhost:3030/todos/',{text: result, done: false}).catch((error)=>{console.error(error, 'shecdoma moxda chapostvisas')});
        await loadTasks();
    }

    return (
        <Container className={'my-5 border'}>
            <span className={'text-center my-2'}>
                <div>Every action on this site needs 2 second until it will work properly!</div>
                <div>So wait for it.</div>
            </span>
            <Form>
                {
                    loading
                        ?
                        (<div className={'text-center my-5'}>
                            <Spinner
                                animation="border"
                            />
                        </div>)
                        :
                        (
                            <div>
                                <div className={'text-center my-2 '}>
                                    <Button onClick={handleAddPost} type={'button'}>Add Post</Button>
                                </div>
                                <ListGroup className={'my-2'}>
                                    {
                                        tasks.map((task) => (
                                            <ListGroup.Item key={task.id} className={'d-flex'}>
                                                <Form.Check
                                                    checked={task.done}
                                                    onChange={toggleDone(task.id)}
                                                    className={'me-3'}
                                                >
                                                </Form.Check>
                                                <div className={'flex-fill'}>
                                                    {
                                                        task.done ?
                                                            (<del>{task.text}</del>)
                                                            :
                                                            (<span>{task.text}</span>)
                                                    }
                                                </div>
                                                <Button
                                                    type={'button'}
                                                    onClick={() => {
                                                        handleEdit(task.id)
                                                    }}
                                                    className={'mx-2'}
                                                >
                                                    <EditIcon/>
                                                </Button>
                                                <Button
                                                    type={'button'}
                                                    onClick={() => {
                                                        handleDelete(task.id)
                                                    }}
                                                    className={'mx-2'}
                                                >
                                                    <DeleteIcon/>
                                                </Button>
                                            </ListGroup.Item>
                                        ))
                                    }
                                </ListGroup>
                            </div>
                        )
                }
            </Form>
        </Container>
    )
}