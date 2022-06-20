import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";

export default function SearchForm({onSubmit}) {
    const startingValues = {
        name: '',
        username: '',
        email: '',
    }

    const [values, setValues] = useState(startingValues);

    const resetValues = () => {
        setValues(startingValues);
    }

    const lastChange = async (event) => {
        event.preventDefault();
        const params = giveDataBaseInfoFromInputtedValuesThatIsNotEmpty(values);
        onSubmit(params);
    }

    const giveDataBaseInfoFromInputtedValuesThatIsNotEmpty = (values) => {
        // If any kind of input is empty string like "" then we mustn't push it into the database to ask is it in or not.
        // Because database will search that empty value in the keys with key values that you asked. And it will not find it.
        // If you know name and you want to find user with it then you have to ask only name to find it right?
        // For example person is suspect in crime. Police asks you how suspect looks like? You know that he has blue cap
        // but you said that he has green cap. So this information is already not only incorrect, its extra too.
        return Object.entries(values).reduce((object, [key, value]) => {
            if (value) object[key] = value;
            return object;
        }, {});
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({...values, [name]: value})
    }

    return (
        <Form onSubmit={lastChange} onReset={resetValues}>
            <Row className={'mt-3'}>
                <Col>
                    <Form.Group className={'mb-3'}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            placeholder={'Enter name'}
                            value={values.name}
                            name={'name'}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className={'mb-3'}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            placeholder={'Enter username'}
                            value={values.username}
                            name={'username'}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className={'mb-3'}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            placeholder={'Enter email'}
                            value={values.email}
                            name={'email'}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <div className={'d-flex p-1 rounded justify-content-end bg-light'}>
                <Button className={'m-1'} variant={'danger'} type={'reset'}>Reset</Button>
                <Button className={'m-1'} variant={'success'} type={'submit'}>Search</Button>
            </div>
        </Form>
    );
}