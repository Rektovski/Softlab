import React, {useEffect, useState} from "react";
import {Button,ProgressBar} from "react-bootstrap";

let setId;

function Timer() {
    const startingTime = 100;

    const [time, setTime] = useState(startingTime);
    const [tick, setTick] = useState(false);

    useEffect(() => {
        if (tick && time) {
            clearInterval(setId);
            setId = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        } else {
            setTick(false);
            clearInterval(setId);
        }
    }, [tick, time]);

    const startPause = () => {
        tick ? setTick(false) : setTick(true);
    }

    const reset = () => {
        setTick(false);
        setTime(startingTime);
    }

    const now = (time/startingTime)*100;

    const progressInstance = (
        <ProgressBar now={now} className='w-100'  />
    );


    let hh = Math.floor(time / 3600);
    let mm = Math.floor(time % 3600 / 60);
    let ss = time % 60;
    let h, m, s;
    hh < 10 ? h = `0${hh}` : h = hh;
    mm < 10 ? m = `0${mm}` : m = mm;
    ss < 10 ? s = `0${ss}` : s = ss;

    const buttonStartPauseChanged = tick ? 'Pause' : 'Start';

    return (
        <div className="card border-5 border-danger m-2 p-2 text-center">
            <div>
                {h}:{m}:{s}
                <div className="progress m-2">
                    {progressInstance}
                </div>
            </div>
            <div>
                <Button variant='btn btn-success mx-2' onClick={startPause}>{buttonStartPauseChanged}</Button>
                <Button variant='btn btn-success mx-2' onClick={reset}>reset</Button>
            </div>
        </div>
    );
}

export default Timer;