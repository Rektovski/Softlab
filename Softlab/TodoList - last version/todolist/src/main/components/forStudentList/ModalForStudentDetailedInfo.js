import {ListGroup, Modal, ModalBody, ModalHeader, ModalTitle} from "react-bootstrap";
import '../../style/studentListStyle/studentList.css';

export default function ModalForStudentDetailedInfo(props) {
    return (
        <Modal {...props} size={'lg'}>
            <ModalHeader closeButton>
                <ModalTitle>About Student - {`${props.data.name} ${props.data.surname}`}</ModalTitle>
            </ModalHeader>
            <ModalBody className={'mt-4'}>
                <ListGroup>
                    <ListGroup.Item className={'field-container'}>
                        <div className={'field-label'}>Name:</div>
                        <div>{props.data.name}</div>
                    </ListGroup.Item>
                    <ListGroup.Item className={'field-container'}>
                        <div className={'field-label'}>Surname:</div>
                        <div>{props.data.surname}</div>
                    </ListGroup.Item>
                    <ListGroup.Item className={'field-container'}>
                        <div className={'field-label'}>Email:</div>
                        <div>{props.data.email}</div>
                    </ListGroup.Item>
                    <ListGroup.Item className={'field-container'}>
                        <div className={'field-label'}>Mobile:</div>
                        <div>{props.data.mobile}</div>
                    </ListGroup.Item>
                    <ListGroup.Item className={'field-container'}>
                        <div className={'field-label'}>Gender:</div>
                        <div>{props.data.gender}</div>
                    </ListGroup.Item>
                    <ListGroup.Item className={'field-container'}>
                        <div className={'field-label'}>Date of Birth:</div>
                        <div>{props.data.dateOfBirth}</div>
                    </ListGroup.Item>
                    <ListGroup.Item className={'field-container'}>
                        <div className={'field-label'}>Address:</div>
                        <div>{props.data.address}</div>
                    </ListGroup.Item>
                    <ListGroup.Item className={'field-container'}>
                        <div className={'field-label'}>City:</div>
                        <div>{props.data.city}</div>
                    </ListGroup.Item>
                    <ListGroup.Item className={'field-container'}>
                        <div className={'field-label'}>Area PIN:</div>
                        <div>{props.data.areaPin}</div>
                    </ListGroup.Item>
                    <ListGroup.Item className={'field-container'}>
                        <div className={'field-label'}>State:</div>
                        <div>{props.data.state}</div>
                    </ListGroup.Item>
                    <ListGroup.Item className={'field-container'}>
                        <div className={'field-label'}>Specialization:</div>
                        <div>{props.data.specialization}</div>
                    </ListGroup.Item>
                </ListGroup>
            </ModalBody>
        </Modal>
    );
}