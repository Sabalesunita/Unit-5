import { useEffect, useState } from "react"



export const StopWatch=()=>{

    const [time, setTime]=useState(0)
    const [timerOn,setTimeOn]=useState(false)

    useEffect(()=>{
           if(timerOn){
            var id=setInterval(()=>{
                setTime((prevValue)=>prevValue+10)
              },10) 
           }
           return ()=>{
            clearInterval(id)  
           }
    },[timerOn])

    const handleStart=()=>{
        setTimeOn(true)
    }
    const handleStop=()=>{
        setTimeOn(false)  
    }
    const handleReset=()=>{
        setTime(0)
        setTimeOn(false)
    }
    return (
        <div className="StopWatch">
        <h1>Stop Watch</h1>
        <div>
                <span>{("0"+ Math.floor((time/600000)%60)).slice(-2)} h :</span>
                <span>{("0"+ Math.floor((time/60000)%60)).slice(-2)} m :</span>
                <span>{("0"+ Math.floor((time/1000)%60)).slice(-2)} s :</span>
                <span>{("0"+Math.floor((time/10)%60)).slice(-2)} ms</span>
        </div>
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        </div>
    )
}