import CardHeader from "react-bootstrap/CardHeader";
import {Card} from "react-bootstrap";

export default function Contact(){
    return (
        <Card>
            <CardHeader>
                <div>კონტაქტი</div>
            </CardHeader>
            <Card.Body>
                <div>0171, საქართველო, თბილისი, კოსტავას 77</div>

                <div>ტელ:  (+995 32) 2 77 11 11;</div>

                <div>საერთაშორისო სტუდენტების რეკრუტირება: interstudy@gtu.ge</div>
                <div>დიპლომის ნამდვილობის დადასტურება:verification@gtu.ge</div>

                <div>ელ. ფოსტა: rectoroffice@gtu.ge ; info@gtu.ge ; science@gtu.ge ; pr@gtu.ge</div>
            </Card.Body>
        </Card>
    );
}