import {Card, CardImg, Nav} from 'react-bootstrap';
import foto
    from './website/images/png-transparent-macbook-pro-laptop-apple-imac-vintage-computer-angle-electronics-computer.png';

function App() {
    return (
        <Card className='border-5 border-danger m-2 p-2'>

            <Card.Header as={'h1'} className='text-center'>
                <CardImg style={{width: 100, height: 100}} src={foto} alt={'foto'}></CardImg>
                My Website!
            </Card.Header>

            <Card.Body className={'row'}>
                <aside className={'col-sm-12 col-md-4 col-lg-4 text-center'}>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/home">Store</Nav.Link>
                        <Nav.Link href="/home">Policy</Nav.Link>
                        <Nav.Link href="/home">About Us</Nav.Link>
                        <Nav.Link href="/home">Contact</Nav.Link>
                    </Nav>
                    <article className={'justify-content-center align-content-center'}>
                        <p style={{textAlign: 'justify'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley.
                        </p>
                    </article>

                </aside>

                <main className={'col-sm-12 col-md-8 col-lg-8'}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                </main>
            </Card.Body>
            <Card.Footer className={'col-12 text-center'}>INC FOOTER</Card.Footer>
        </Card>
    );
}

export default App;