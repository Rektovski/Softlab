import {Button, Container, Form, FormCheck, FormControl, InputGroup, ListGroup} from "react-bootstrap";
import {FaRegEdit as Edit, FaWindowClose as DeleteButton} from 'react-icons/fa';
import {useEffect, useState} from "react";
import closeBtnStyle from './style/closeBtnStyle.css';
import editBtnStyle from './style/editBtnStyle.css';
import ModalForEditing from "./ModalForEditing";

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [showHideButton, setShowHideButton] = useState(true);
    const [counter, setCounter] = useState(0);
    const [show, setShow] = useState(false);
    const [currentTask, setCurrentTask] = useState([]);

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
        if (event.target.checked) setCounter(counter + 1);
        else if (!event.target.checked && !counter) setCounter(0);
        else if (!event.target.checked) setCounter(counter - 1);
        setTasks((prevState) => {
            const task = prevState.find((object) => object.id === id);
            task.done = event.target.checked;
            return [...prevState];
        })
    }

    const deleteTask = (id) => () => {
        const missions = tasks.filter((task) => task.id !== id);
        setTasks(missions);
        return tasks;
    }

    const deleteChecked = () => {
        const notCheckedTasks = tasks.filter((mission) => !mission.done);
        setTasks(notCheckedTasks);
        return tasks;
    }

    const edit = ({id, newTask}) => {
        if(!id)return ;
        setTasks((prevState) => {
            const task = prevState.find((object) => object.id === id);
            task.task = newTask;
            return [...prevState];
        })
        setShow(false);
    }

    useEffect(() => {
        counter
            ? setShowHideButton(false)
            : setShowHideButton(true);
    }, [counter]);

    return (
        <Container className={'border border-rounded mt-3'}>
            <h1 className={'text-center'}>To-Do List</h1>
            <Form onSubmit={addNewTask}>
                <InputGroup className="my-3">
                    <FormControl
                        placeholder="Task"
                        name={'task'}
                        value={newTask}
                        onChange={saveNewTask}
                    />
                    <Button
                        type={"submit"}
                        variant="outline-secondary"
                    >
                        +
                    </Button>
                </InputGroup>
            </Form>

            <ListGroup className={'mb-3 border border-rounded'}>
                {
                    tasks.map((task) => (
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
                                variant={'outline-primary'}
                                style={editBtnStyle}
                                className={'editBtnStyle'}
                                type={'button'}
                                onClick={() => {
                                    setCurrentTask(task);
                                    setShow(true);
                                }}
                            >
                                <Edit/>
                            </Button>
                            <Button
                                variant={'danger'}
                                style={closeBtnStyle}
                                className={'closeBtnStyle mx-2'}
                                type={'button'}
                                onClick={deleteTask(task.id)}
                            >
                                <DeleteButton/>
                            </Button>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
            <div className={'d-flex mb-3'}>
                <div className={'flex-fill'}></div>
                <Button hidden={showHideButton} onClick={deleteChecked}>Delete checked Tasks</Button>
            </div>

            <ModalForEditing
                show={show}
                onHide={() => {
                    setShow(false);
                }}
                mission={currentTask}
                onSubmit={edit}
            />
        </Container>
    );
}