import {Button, Container, Form} from "react-bootstrap";
import {useContext, useState} from "react";
import "../../style/formStyle/formStyle.css";
import ThemeContext from "../../context/ThemeContext";
import api from "../../api/Api";

export default function RegistrationForm() {
    const startingCV = {
        name: '',
        surname: '',
        email: '',
        mobile: '',
        gender: '',
        dateOfBirth: '',
        address: '',
        city: '',
        areaPin: '',
        state: '',
        specialization: '',
    }

    const [cv, setCV] = useState(startingCV);
    const {theme} = useContext(ThemeContext);

    const handleCVChange = (event) => {
        setCV({...cv, [event.target.name]: event.target.value});
        console.log(cv);
    }

    const handleCVChangeSpec = (value) => (event) => {
        setCV({...cv, [event.target.name]: value});
        console.log(cv);
    }

    const sendCvDetailsToServerPost = async () => {
        await api.post('http://localhost:3030/posts/', cv);
    }

    return (
        <div className={`p-5 bg-${theme}`}>
            <Container className={`p-5 bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                <Form onSubmit={sendCvDetailsToServerPost}>
                    <Form.Group className={'field-container'}>
                        <Form.Label className={'field-label'}>Name: </Form.Label>
                        <Form.Control
                            className={'my-2'}
                            placeholder={'type your name'}
                            name={'name'}
                            value={cv.name}
                            onChange={handleCVChange}
                        />
                    </Form.Group>
                    <Form.Group className={'field-container'}>
                        <Form.Label className={'field-label'}>Surname: </Form.Label>
                        <Form.Control
                            className={'my-2'}
                            placeholder={'type your surname'}
                            name={'surname'}
                            value={cv.surname}
                            onChange={handleCVChange}
                        />
                    </Form.Group>
                    <Form.Group className={'field-container'}>
                        <Form.Label className={'field-label'}>Email: </Form.Label>
                        <Form.Control
                            className={'my-2'}
                            placeholder={'example@example.com'}
                            name={'email'}
                            type={'email'}
                            value={cv.email}
                            onChange={handleCVChange}
                        />
                    </Form.Group>
                    <Form.Group className={'field-container'}>
                        <Form.Label className={'field-label'}>Mobile: </Form.Label>
                        <Form.Control
                            className={'my-2'}
                            placeholder={'+995-XXX-XXX-XXX'}
                            name={'mobile'}
                            value={cv.mobile}
                            onChange={handleCVChange}
                        />
                    </Form.Group>
                    <Form.Group className={'field-container my-2'}>
                        <Form.Label className={'field-label'}>Gender: </Form.Label>
                        <Form.Check
                            type={'radio'}
                            className={'mx-2'}
                            name={'gender'}
                            label={'Male'}
                            onChange={handleCVChangeSpec('Male')}
                        />
                        <Form.Check
                            type={'radio'}
                            className={'mx-2'}
                            name={'gender'}
                            label={'Female'}
                            onChange={handleCVChangeSpec('Female')}
                        />
                    </Form.Group>
                    <Form.Group className={'field-container'}>
                        <Form.Label className={'field-label'}>Date of birth: </Form.Label>
                        <input type={'date'} name={'dateOfBirth'} onChange={handleCVChange}></input>
                    </Form.Group>
                    <Form.Group className={'field-container'}>
                        <Form.Label className={'field-label'}>Address: </Form.Label>
                        <Form.Control
                            as={'textarea'}
                            style={{minHeight: 50, maxHeight: 100, resize: "vertical"}}
                            className={'my-2 '}
                            placeholder={'type your address'}
                            name={'address'}
                            value={cv.address}
                            onChange={handleCVChange}
                        />
                    </Form.Group>
                    <Form.Group className={'field-container'}>
                        <Form.Label className={'field-label'}>City: </Form.Label>
                        <Form.Control
                            className={'my-2 '}
                            placeholder={'type your city'}
                            name={'city'}
                            value={cv.city}
                            onChange={handleCVChange}
                        />
                    </Form.Group>
                    <Form.Group className={'field-container'}>
                        <Form.Label className={'field-label'}>Area PIN: </Form.Label>
                        <Form.Control
                            className={'my-2 '}
                            placeholder={'type your areaPin'}
                            name={'areaPin'}
                            value={cv.areaPin}
                            onChange={handleCVChange}
                        />
                    </Form.Group>
                    <Form.Group className={'field-container'}>
                        <Form.Label className={'field-label'}>State: </Form.Label>
                        <Form.Control
                            className={'my-2 '}
                            placeholder={'type your state'}
                            name={'state'}
                            value={cv.state}
                            onChange={handleCVChange}
                        />
                    </Form.Group>
                    <Form.Group className={'field-checkbox'}>
                        <Form.Label className={'field-label'}>Specialization: </Form.Label>
                        <div className={'field-block'}>
                            <Form.Check
                                type={'radio'}
                                className={'mx-2'}
                                name={'specialization'}
                                label={'IT Support'}
                                onChange={handleCVChangeSpec('It Support')}
                            />
                            <Form.Check
                                type={'radio'}
                                className={'mx-2'}
                                name={'specialization'}
                                label={'Cyber Security'}
                                onChange={handleCVChangeSpec('Cyber Security')}
                            />
                            <Form.Check
                                type={'radio'}
                                className={'mx-2'}
                                name={'specialization'}
                                label={'DevOps'}
                                onChange={handleCVChangeSpec('DevOps')}
                            />
                            <Form.Check
                                type={'radio'}
                                className={'mx-2'}
                                name={'specialization'}
                                label={'Software Engineer'}
                                onChange={handleCVChangeSpec('Software Engineer')}
                            />
                        </div>
                    </Form.Group>
                    <div className={'d-flex justify-content-center'}>
                        <Button variant={"primary"} type={"submit"}>Register</Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}
