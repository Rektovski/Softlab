import {Container, Alert, Card} from "react-bootstrap";

export default function ErrorPage() {
    return (
        <Container>
            <Alert variant={'info'} className={'m-2 text-center'}>
                <Card className={'m-2 p-2'}>
                    <Card.Text>This site is not available cause the URL is incorrect...</Card.Text>
                    <Card.Text>Try this <a href={'http://localhost:3000/'}>one</a></Card.Text>
                </Card>
            </Alert>
        </Container>
    );
}