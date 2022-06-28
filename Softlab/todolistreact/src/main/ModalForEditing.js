import {Button, Form, FormControl, InputGroup, Modal, ModalHeader, ModalTitle} from "react-bootstrap";
import {useState} from "react";

export default function ModalForEditing(props) {
    const [newTask, setNewTask] = useState('');

    const saveNewTask = (event) => {
        setNewTask(event.target.value);
    }

    const editTask = (id,task) => (event) => {
        setNewTask(task);
        event.preventDefault();
        if(newTask){
            props.onSubmit({id, newTask});
            setNewTask('');
        }
    }

    const close = () => {
        setNewTask('');
    }

    return (
        <Modal {...props} onClose={close}>
            <ModalHeader closeButton>
                <ModalTitle>Editing: "{props.mission.task}"</ModalTitle>
            </ModalHeader>
            <Form onSubmit={editTask(props.mission.id)} className={'m-2'}>
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

