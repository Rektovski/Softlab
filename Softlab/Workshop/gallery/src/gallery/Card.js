import {Card, CardImg} from "react-bootstrap";

function ForAlbums(props){
    return (
        <Card style={{borderRadius: 50, backgroundColor: "cyan"}} role={'button'} onClick={props.onClick} className={'text-center border-5 border-dark m-5'}>
            <Card.Body style={{height: 200}}>
                <Card.Text>{`Album #${props.albumId}`}</Card.Text>
                <Card.Text>{props.title}</Card.Text>
            </Card.Body>
        </Card>
    );
}

function ForPhotos(props){
    return (
        <Card {...props} role={'button'} className={'text-center border-5 border-dark m-5'}>
            <Card.Body >
                <CardImg src={props.url} alt={`photos's url`}/>
                <Card.Text>{props.title}</Card.Text>
            </Card.Body>
        </Card>
    );
}

const result = {ForAlbums,ForPhotos};

export default result;