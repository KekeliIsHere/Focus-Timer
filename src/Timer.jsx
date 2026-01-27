import { useState,useEffect,useRef } from 'react'

function Timer(){
    const startTimeRef=useRef();
    const [time,setTime]=useState(0);
    const [isRunning,setIsRunning]=useState(false);
    const MAX=59;
    const MIN=0;
    
    
    useEffect(() => {
    // This happens once. We save '10' into our storage box.
        startTimeRef.current = time;
    }, []);
    
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds =time % 60;

    //The pad is made for the ,format so that time has that 02, 01, 00 look you get it.
    const pad = (n) => String(n).padStart(2, "0");


    

    useEffect(() => {
        let intervalId;
    

        
        if (isRunning && time > 0) {
            intervalId = setInterval(() => {
                setTime(prev => prev - 1);
            }, 1000);
        }

        // Cleanup: always clear the interval when state changes or unmounts
        return () => clearInterval(intervalId);
    }, [isRunning, time])

    //Added functions to increase the time with the plus and minus things.

    //Hour Changes
    const hourIncrease=()=>{
        if(!isRunning){
            setTime(time=>time+3600);
        }
    }
    const hourDecrease=()=>{
        setTime(time=>Math.max(0,time-3600))
    }

    //Minute Change
    const minuteIncrease=()=>{
        if(!isRunning){
            setTime(time=>time+60);
        }
    }
    const minuteDecrease=()=>{
        if(!isRunning){
            setTime(time=>Math.max(0,time-60));
        }
    }

    //Second Change
    const secondIncrease=()=>{
        if(!isRunning){
            setTime(time=>time+1);
        }
    }
    const secondDecrease=()=>{
        if(!isRunning){
            setTime(time=>Math.max(0,time-1));
        }
    }



    function toggleIsRunning(){
        setIsRunning(!isRunning);   
    }  

    function toggleReset(){
        setTime(startTimeRef.current);
        setIsRunning(false);
    }

    return(
        <>
            <p>Time: {time}</p>
            <p>Actual Time: {pad(hours)}:{pad(minutes)}:{pad(seconds)}</p>

            <p>Running: {isRunning?"True":"False"}</p>
            <table>
                <tr>
                    <td><button onClick={hourIncrease}>+</button></td>
                    <td><button onClick={minuteIncrease}>+</button></td>
                    <td><button onClick={secondIncrease}>+</button></td>                    
                </tr>
                <tr>
                    <td>{pad(hours)}</td>
                    <td>{pad(minutes)}</td>
                    <td>{pad(seconds)}</td>                                     
                </tr>
                <tr>
                    <td><button onClick={hourDecrease}>-</button></td>
                    <td><button onClick={minuteDecrease}>-</button></td>
                    <td><button onClick={secondDecrease}>-</button></td>                    
                </tr>

            </table>
            <button onClick={toggleIsRunning}>Start/Pause</button> 
            <button onClick={toggleReset}>Reset</button>     
        </>     
    );
}

export default Timer;