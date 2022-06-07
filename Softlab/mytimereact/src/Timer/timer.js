import React, {useEffect, useState} from "react";

function Timer() {
    const startHour = 1;
    const startMinute = 1;
    const startSecond = 3;

    const [hour, setHour] = useState(startHour);
    const [minute, setMinute] = useState(startMinute);
    const [second, setSecond] = useState(startSecond);

    useEffect(()=>{
        const Timer=setInterval(changeTime,1000);
        return ()=>{
            clearInterval(Timer);
        }
    },[hour,minute,second]);

    function changeTime() {
        if(!hour && !minute && !second)return {hour,minute,second};
        if(second>0){
            setSecond(second-1);
            return {hour,minute,second};
        }
        if(!hour && !minute && !second)return {hour,minute,second};
        setSecond(59);
        if(minute>0){
            setMinute(minute-1);
            return {hour,minute,second};
        }
        if(!hour && !minute && !second)return {hour,minute,second};
        setMinute(59);
        if(hour>0){
            setHour(hour-1);
            return {hour,minute,second};
        }
        return {hour,minute,second};
    }

    function Pause(){
        clearInterval(Timer);
    }

    function Reset(){
        setHour(startHour);
        setMinute(startMinute);
        setSecond(startSecond);
        clearInterval(Timer);
    }

    return (
        <div className='card border-5 border-danger m-2 p-2 text-center'>
            <div className='p-2'>
                {hour}:{minute}:{second}
            </div>
            <div>
                <button className='btn btn-success mx-2' onClick={Timer}>Start</button>
                <button className='btn btn-success mx-2' onClick={Pause}>Pause</button>
                <button className='btn btn-danger mx-2' onClick={Reset}>Reset</button>
            </div>
        </div>
    );
}

export default Timer;