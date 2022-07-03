import {Button, Container, Form, FormControl, InputGroup, ListGroup} from "react-bootstrap";
import axios from "axios";
import {useEffect, useState} from "react";
import {FaRegEdit as EditIcon, FaWindowClose as DeleteIcon} from 'react-icons/fa';

export default function Main() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setNewTasks] = useState([]);
    const [show, setShow] = useState(true); // Last Button hidden={} state for deleting checked tasks

    useEffect(() => {
        loadTasks().catch((error) => console.error(error));
    }, []);

    const loadTasks = async () => {
        await axios.get('http://localhost:3030/todos/')
            .then((response) => {
                setNewTasks(response.data);
            })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (newTask) {
            await axios.post('http://localhost/todos/', {text: newTask, done: false})
                .catch((error) => {
                    console.error(error)
                })
            setNewTask('');
        }
        await loadTasks();
    }

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const toggleDone = (id) => async (event) => {
        const task = tasks.find((object) => object.id === id);
        task.done = event.target.checked;
        await axios.put(`http://localhost/todos/${id}`, task);
        await loadTasks();
        setNewTasks((prevState) => {
                const done = prevState.filter((task) => task.done);
                const undone = prevState.filter((task) => !task.done);
                return [...done, ...undone];
            }
        )
        tasks.find((object) => object.done) ? setShow(false) : setShow(true);
    }

    const handleEdit = (id) => async () => {
        const task = tasks.find((task) => task.id === id);
        const answer = window.prompt('Edit task:', task.text);
        if (answer) {
            task.text = answer;
            await axios.put(`http://localhost/todos/${id}`, task);
            await loadTasks();
        }
    }

    const handleDelete = (id) => async () => {
        await axios.delete(`http://localhost/todos/${id}`).catch(e => console.error(e));
        await loadTasks();
    }

    const deleteCheckedTasks = async () => {
        // todo Doesn't work
        await tasks
            .filter((object) => object.done)
            .forEach((object) => {
                axios.delete(`http://localhost/todos/${object.id}`).catch(e => console.error(e));
                console.log('Id: ', object.id, 'text: ', object.text ,'was deleted');
            })
        await loadTasks();
    }

    return (
        <Container className={'my-3 border border-1 border-secondary'}>
            <h1 className={'text-center'}>To-Do List with Api</h1>
            <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Enter your task"
                        name={'text'}
                        value={newTask}
                        onChange={handleChange}
                    />
                    <Button
                        variant="outline-secondary"
                        type={'submit'}
                    >
                        +
                    </Button>
                </InputGroup>
            </Form>

            <ListGroup>
                {
                    tasks.map((task) => (
                        <ListGroup.Item key={task.id} className={'my-2 border border-1 border-primary d-flex'}>
                            <Form.Check checked={task.done} onChange={toggleDone(task.id)}
                                        className={'me-3'}></Form.Check>
                            <div className={'flex-fill'}>{
                                task.done
                                    ? (<del>{task.text}</del>)
                                    : (<div>{task.text}</div>)
                            }</div>
                            <Button className={'mx-2'} type={'button'} onClick={handleEdit(task.id)}>
                                <EditIcon/>
                            </Button>
                            <Button className={'mx-2'} type={'button'} onClick={handleDelete(task.id)}>
                                <DeleteIcon/>
                            </Button>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
            <div className={'d-flex justify-content-end my-2'}>
                <Button onClick={deleteCheckedTasks} hidden={show} type={"button"}>
                    Delete Checked Tasks
                </Button>
            </div>
        </Container>
    );
}