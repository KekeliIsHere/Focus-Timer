import { useState,useEffect } from 'react'
function Timer(){
    const [time,setTime]=useState(10);
    const [isRunning,setIsRunning]=useState(false);

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

    return(
        <>
            <p>Time: {time}</p>
            <p>Running: {isRunning?"True":"False"}</p>  
            <button onClick={toggleIsRunning}>Start/Pause</button>      
        </>     
    );

}
export default Timer;