import {Button, Card, Container} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import ThemeContext from "../../context/ThemeContext";

let id;

export default function Timer() {
    const startingTime = 3602;

    const [time, setTime] = useState(startingTime);
    const [tick, setTick] = useState(false);
    const [sp, setSP] = useState('Start');
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        if (tick && time) {
            clearInterval(id);
            id = setInterval(() => {
                setTime((prevState) => {
                    return prevState - 1;
                })
            }, 1000);
        } else {
            clearInterval(id);
        }
    }, [tick, time])

    const startPause = () => {
        if (tick) {
            setTick(false);
            setSP('Start');
        } else {
            setTick(true);
            setSP('Pause');
        }
    }

    const reset = () => {
        setTime(startingTime);
        setTick(false);
        setSP('Start');
    }

    const timerFormat = (time) => {
        const h = Math.floor(time / 3600);
        const m = Math.floor(time % 3600 / 60);
        const s = Math.floor(time % 3600 % 60);
        const HH = h < 10 ? `0${h}` : h;
        const MM = m < 10 ? `0${m}` : m;
        const SS = s < 10 ? `0${s}` : s;
        return `${HH}:${MM}:${SS}`;
    }

    const chooseTime = () => {
        const result = window.prompt('Choose time (Hint: Type in Seconds)');
        if (result) {
            setTick(false);
            setTime(Number(result));
            setSP('Start');
        }
    }

    return (
        <div className={`bg-${theme} p-5`}>
            <Container className={`bg-${theme} p-5 border border-1 rounded border-secondary`} style={{height: "100vh", marginTop: 100}}>
                <Card className={`bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
                    <Card.Header className={'text-center'}>
                        <Card.Title>{timerFormat(time)}</Card.Title>
                    </Card.Header>
                    <Card.Body className={'text-center'}>
                        <Button className={'mx-2'} variant={"outline-success"} onClick={startPause}>{sp}</Button>
                        <Button className={'mx-2'} variant={"outline-danger"} onClick={reset}>Reset</Button>
                        <Button className={'mx-2'} variant={"outline-secondary"} onClick={chooseTime}>Choose Time</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}