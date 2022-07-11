import {Card} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import ThemeContext from "../../context/ThemeContext";
import React from 'react';

export default function Clock(){
    const {theme} = useContext(ThemeContext);

    let time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time);

    setInterval(()=>{
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    },1000)

    return (
        <Card className={`text-center bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
            <h1>{currentTime}</h1>
        </Card>
    );
}