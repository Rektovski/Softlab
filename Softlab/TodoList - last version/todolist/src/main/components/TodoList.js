import {Button, Container, FloatingLabel, Form, FormControl, ListGroup} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {IoIosCheckmarkCircleOutline as AddIcon, IoIosBuild as EditIcon, IoMdTrash as DeleteIcon} from 'react-icons/io'
import LoadingContext from "../context/LoadingContext";
import ThemeContext from "../context/ThemeContext";

export default function TodoList() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const {setLoading} = useContext(LoadingContext);
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        loadTasks();
    }, [])

    const loadTasks = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3030/todos/');
            const completed = response.data.filter((task) => task.done);
            const incompleted = response.data.filter((task) => !task.done);
            setTasks([...completed, ...incompleted]);
        } catch (error) {
            console.error(error, 'loadTasks shi moxda error');
        }
        setLoading(false);
    }

    const handleChangeFloatingLabel = (event) => {
        setNewTask(event.target.value);
    }

    const startLoading = () => {
        setLoading(true);
    }

    const addPost = async (event) => {
        event.preventDefault();
        startLoading();
        try {
            await axios.post('http://localhost:3030/todos', {text: newTask, done: false});
        } catch (error) {
            console.error(error, 'addPost shi moxda error')
        }
        await loadTasks();
        setNewTask('');
    }

    const toggleDone = (id) => async (event) => {
        startLoading();
        const task = tasks.find((task) => task.id === id);
        task.done = event.target.checked;
        try {
            await axios.put(`http://localhost:3030/todos/${id}`, task)
        } catch (error) {
            console.error(error, 'toggleDone shi moxda error')
        }
        await loadTasks();
    }

    const editTask = (id) => async () => {
        const task = tasks.find((task) => task.id === id);
        const result = window.prompt('Add task', task.text);
        if (result) {
            startLoading();
            task.text = result;
            await axios.put(`http://localhost:3030/todos/${id}`, task);
            await loadTasks();
        }
    }

    const deleteTask = (id) => async () => {
        startLoading();
        await axios.delete(`http://localhost:3030/todos/${id}`)
        await loadTasks();
    }

    return (
        <Container style={{height: '100vh'}}>
            <Form onSubmit={addPost} className={`bg-${theme} text-dark`}>
                <FloatingLabel controlId="floatingTask" label="Task" className={'d-flex p-2'}>
                    <FormControl
                        value={newTask}
                        onChange={handleChangeFloatingLabel}
                    />
                    <Button
                        variant={'primary'}
                        type={'submit'}
                    >
                        <AddIcon size={40}/>
                    </Button>
                </FloatingLabel>
            </Form>

            <ListGroup className={`bg-${theme} text-${theme}`}>
                {
                    tasks.map((task) => (
                        <ListGroup.Item key={task.id}
                                        className={`d-flex bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                            <Form.Check
                                className={'me-3'}
                                type={'checkbox'}
                                checked={task.done}
                                onChange={toggleDone(task.id)}
                            />
                            <div className={'flex-fill'}>
                                {
                                    task.done ? (<del>{task.text}</del>) : (<div>{task.text}</div>)
                                }
                            </div>

                            <Button className={'mx-2'} onClick={editTask(task.id)}>
                                <EditIcon size={20}/>
                            </Button>
                            <Button className={'mx-2'} onClick={deleteTask(task.id)}>
                                <DeleteIcon size={20}/>
                            </Button>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Container>
    );
}