import {Button, Card, ProgressBar} from "react-bootstrap";
import {useEffect, useState} from "react";

let setID;

function App() {
    const startingTime = 86400;

    const [time, setTime] = useState(startingTime);
    const [tick, setTick] = useState(false);

    useEffect(()=>{
        if(tick && time){
            clearInterval(setID);
            setID = setInterval(()=>{
                setTime(time-1);
            },1);
        }
        else {
            setTick(false);
            clearInterval(setID);
        }
    },[tick,time]);


    const startPause = () => {
        tick ? setTick(false) : setTick(true);
    }

    const buttonChangeStartOrPause = tick ? 'Pause' : 'Start';

    const Reset = () => {
        setTick(false);
        setTime(startingTime);
    }

    let h = Math.floor(time / 3600);
    let m = Math.floor(time % 3600 / 60);
    let s = time % 60;
    let HH,MM,SS;
    h < 10 ? HH = `0${h}` : HH = h;
    m < 10 ? MM = `0${m}` : MM = m;
    s < 10 ? SS = `0${s}` : SS = s;

    return (
        <Card className={'border-danger border-5 m-2 p-2 text-center'}>
            <Card.Header>
                {HH}:{MM}:{SS}
            </Card.Header>

            <div className={'pt-2'}>
                <ProgressBar now={(time/startingTime)*100}  />
            </div>

            <Card.Body>
                <Button variant={'success mx-2'} onClick={startPause}>{buttonChangeStartOrPause}</Button>
                <Button variant={'danger mx-2'} onClick={Reset}>Reset</Button>
            </Card.Body>
        </Card>
    );
}

export default App;
