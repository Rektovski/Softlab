import {Card, Container} from "react-bootstrap";

export default function ErrorPage() {
    return (
        <Container className={'m-2 p-2 border border-1 border-danger'}>
            <Card className={'m-2 p-2 text-center border border-1 border-info'}>
                <span>This url is incorrect. Try this one: <a href={'http://localhost:3000'}
                                                              alt={'link of http://localhost:3000'}>link</a></span>
            </Card>
        </Container>
    );
}