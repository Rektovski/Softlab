import {Button, Container, Form, FormCheck, FormControl, InputGroup, ListGroup} from "react-bootstrap";
import {FaWindowClose as DeleteButton} from 'react-icons/fa';
import {useState} from "react";
import closeBtnStyle from './style/closeBtnStyle.css';

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const saveNewTask = (event) => {
        setNewTask(event.target.value);
    }

    const addNewTask = (event) => {
        event.preventDefault();
        if (newTask) {
            const id = new Date().getTime();
            setTasks([...tasks, {id, task: newTask, done: false}]);
            setNewTask('');
        }
    }

    const toggleDone = (id) => (event) => {
        setTasks((prevState) => {
            const task = prevState.find((object) => object.id === id);
            task.done = event.target.checked;
            return [...prevState];
        })
    }

    const deleteTask = (index) => () => {
        setTasks((prevState) => {
            prevState.pop();
            return [...prevState];
        })
    }

    return (
        <Container className={'border border-rounded mt-3'}>
            <Form onSubmit={addNewTask} onClick={addNewTask}>
                <InputGroup className="my-3">
                    <FormControl
                        placeholder="Task"
                        name={'task'}
                        value={newTask}
                        onChange={saveNewTask}
                    />
                    <Button
                        variant="outline-secondary"
                    >
                        +
                    </Button>
                </InputGroup>
            </Form>


            <ListGroup className={'mb-3 border border-rounded'}>
                {
                    tasks.map((task, index) => (
                        <ListGroup.Item key={task.id} className={'d-flex align-items-center'}>
                            <FormCheck onChange={toggleDone(task.id)} className={'me-3'}/>
                            {
                                task.done ? (
                                    <del className={'flex-fill'}>{task.task}</del>
                                ) : (
                                    <span className={'flex-fill'}>{task.task}</span>
                                )
                            }
                            <Button
                                variant={'danger'}
                                style={closeBtnStyle}
                                className={'closeBtnStyle'}
                                type={'button'}
                                onClick={deleteTask(index)}
                            >
                                <DeleteButton/>
                            </Button>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </Container>
    );
}