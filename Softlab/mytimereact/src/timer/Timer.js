import React, {useEffect, useState} from "react";

let setId;

function Timer() {
    const startingTime = 120;

    const [time, setTime] = useState(startingTime);
    const [tick, setTick] = useState(false);

    useEffect(() => {
        if (tick && time) {
            clearInterval(setId);
            setId = setInterval(()=>{
                setTime(time-1);
            }, 1000);
        } else {
            setTick(false);
            clearInterval(setId);
        }
    }, [tick,time]);

    const startPause = () => {
        tick ? setTick(false) : setTick(true);
    }

    const reset = () => {
        setTick(false);
        setTime(startingTime);
    }

    let hh = Math.floor(time/3600);
    let mm = Math.floor(time/60);
    let ss = time%60;
    let h,m,s;
    hh<10 ? h=`0${hh}` : h=hh;
    mm<10 ? m=`0${mm}` : m=mm;
    ss<10 ? s=`0${ss}` : s=ss;

    const buttonStartPauseChanged = tick ? 'Pause' : 'Start';

    return (
        <div className="card border-5 border-danger m-2 p-2 text-center">
            <div>
                {h}:{m}:{s}
            </div>
            <div>
                <button className="btn btn-success m-2" onClick={startPause}>{buttonStartPauseChanged}</button>
                <button className="btn btn-success m-2" onClick={reset}>reset</button>
            </div>
        </div>
    );
}

export default Timer;