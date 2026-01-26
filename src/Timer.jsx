import { useState,useEffect,useRef } from 'react'

function Timer(){
    const startTimeRef=useRef();
    const [time,setTime]=useState(1500);
    const [isRunning,setIsRunning]=useState(false);
    
    
    useEffect(() => {
    // This happens once. We save '10' into our storage box.
        startTimeRef.current = time;
    }, []);
    
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    //The pad is made for the format so that time has that 02, 01, 00 look you get it.
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
            <button onClick={toggleIsRunning}>Start/Pause</button> 
            <button onClick={toggleReset}>Reset</button>     
        </>     
    );

}
export default Timer;