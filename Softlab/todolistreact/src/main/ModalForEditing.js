import {Button, Form, FormControl, InputGroup, Modal} from "react-bootstrap";
import {useState} from "react";

export default function ModalForEditing(props) {
    const [newTask, setNewTask] = useState('');

    const saveNewTask = (event) => {
        setNewTask(event.target.value);
    }

    const editTask = (id) => (event) => {
        event.preventDefault();
        if(newTask){
            props.onSubmit({id, newTask});
            setNewTask('');
        }
    }

    return (
        <Modal {...props}>
            <Form onSubmit={editTask(props.id)} className={'m-2'}>
                <InputGroup className="my-3">
                    <FormControl
                        placeholder="Task"
                        name={'task'}
                        value={newTask}
                        onChange={saveNewTask}
                    />
                    <Button
                        variant="outline-secondary"
                        type={'submit'}
                    >
                        Edit done!
                    </Button>
                </InputGroup>
            </Form>
        </Modal>
    );
}

