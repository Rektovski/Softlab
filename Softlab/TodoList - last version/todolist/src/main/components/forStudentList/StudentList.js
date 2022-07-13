import {useContext, useEffect, useState} from "react";
import ThemeContext from "../../context/ThemeContext";
import {Button, Container, Table} from "react-bootstrap";
import api from "../../api/Api";
import '../../style/studentListStyle/studentList.css';
import ModalForStudentDetailedInfo from "./ModalForStudentDetailedInfo";

export default function StudentList() {
    const {theme} = useContext(ThemeContext);
    const [students, setStudents] = useState([]);
    const [show, setShow] = useState(false);
    const [student, setStudent] = useState({});

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        await api.get('http://localhost:3030/posts')
            .then(response => {
                const data = response.data.filter((student) => student.name)
                setStudents(data);
            })
            .catch(error => console.error(error, 'useEffect shi monacemta chamotvirtvis dros moxda shecdoma'))
    }

    const Delete = (id) => async (event) => {
        const result = window.prompt('Wanna delete? Answer Y/N');
        if (result === 'Y') {
            event.preventDefault();
            await api.delete(`http://localhost:3030/posts/${id}`);
            await loadStudents();
        }
    }

    return (
        <div className={`bg-${theme} p-5`} style={{height: "100vh"}}>
            <Container className={'mt-5'}>
                <h1 className={`text-center text-${theme === 'dark' ? 'light' : 'dark'}`}>{`Student's list`}</h1>
                <Table className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>City</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        students.map((student, index) => (
                            <tr
                                key={student.id}
                                className={'listHovering'}
                            >
                                <td>{index + 1}</td>
                                <td>{student.name}</td>
                                <td>{student.surname}</td>
                                <td>{student.email}</td>
                                <td>{student.gender}</td>
                                <td>{student.city}</td>
                                <td>
                                    <Button
                                        variant={'success'}
                                        className={'me-2'}
                                        type={'button'}
                                        onClick={() => {
                                            setShow(true);
                                            setStudent(student);
                                        }}
                                    >
                                        Full detail
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        variant={'danger'}
                                        type={'button'}
                                        onClick={Delete(student.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </Container>

            <ModalForStudentDetailedInfo
                show={show}
                onHide={() => {
                    setShow(false)
                }}
                data={student}
            />
        </div>
    );
}