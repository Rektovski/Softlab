import {Button, Card, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import {Link} from "react-router-dom";
import style from "./style/registrationFormCss/mainStyle.css"

export default function RegistrationForm() {
    const [startDate, setStartDate] = useState(new Date);

    const formOption = [
        {value: 'ბაკალავრი', label: 'ბაკალავრი'},
        {value: 'მაგისტრატურა', label: 'მაგისტრატურა'},
        {value: 'დოქტორანტურა', label: 'დოქტორანტურა'},
    ]

    return (
        <Card className={'registration'} style={style}>
            <Form>
                <FormGroup className={'p-2'}>
                    <FormLabel>სახელი:</FormLabel>
                    <FormControl
                        className={'input-element'}
                    />
                </FormGroup>
                <FormGroup className={'p-2'}>
                    <FormLabel>გვარი:</FormLabel>
                    <FormControl
                        className={'input-element'}
                    />
                </FormGroup>
                <FormGroup className={'p-2'}>
                    <FormLabel>დაბ. თარ (თვე/დღე/წელი)</FormLabel>
                    <DatePicker className={'input-element'} selected={startDate} onChange={(date)=>setStartDate(date)}/>
                </FormGroup>
                <FormGroup className={'p-2'}>
                    <FormLabel>სწავლის საფეხური</FormLabel>
                    <Select
                        options={formOption}
                        className={'input-element'}
                        placeholder={'აირჩიეთ სასურველი საფეხური'}
                    />
                </FormGroup>
                <div className={'p-2'}>
                    <Button variant={"outline-success"} >რეგისტრაცია</Button>
                    <Button as={Link} to={'/login'} className={'mx-2'}>უკვე გაქვს აქაუნთი?</Button>
                </div>
            </Form>
        </Card>
    );
}