import React, {useState} from "react";

function Button(){
    const [number,change] = useState(0);
    return (
        <div className='card border-5 border-danger'>
            <number className='text-center my-3'>{number}</number>
            <buttonSpace className='d-inline text-center'>
                <button className='btn btn-success mx-2' onClick={()=>{change(number+1)}}>Increment</button>
                <button className='btn btn-danger mx-2' onClick={()=>{change(number-1)}}>Decrement</button>
                <button className='btn btn-secondary mx-2' onClick={()=>{change(0)}}>Reset</button>
            </buttonSpace>
        </div>
    );
}

export default Button;