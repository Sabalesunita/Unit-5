import { useEffect, useState } from "react";

export const Timer=()=>{
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hr, setHr] = useState(0);
    const [timeOn, setTimeOn] = useState(false);

    useEffect(()=>{
        if(timeOn){
            var idsec=setInterval(() => {
             if(sec<=0){
                setSec(0);
                clearInterval(idsec);  
             }
             else{
                setSec((prev_Value) => prev_Value - 1)
            }
                
            }, 1000);
            if (sec === 0 && min !== 0) {
                clearInterval(idsec)
              var idmin = setInterval(() => {
                    setMin((prev) => prev - 1)
                    if (min === 0) {
                        clearInterval(idmin);
                    }
                    else {
                        setSec(60);
                    }
                }, 1000)
            }
            if (min === 0 && hr !== 0) {
               var idhr = setInterval(() => {
                    setHr((prev) => prev - 1)
                    if (hr === 0) {
                        clearInterval(idhr);
                    }
                    else {
                        setMin(60)
                    }
                }, 1000)
            }
            if (hr === 0) {
                clearInterval(idhr)
            }
            if (hr === 0 && min === 0 && sec === 0) {
                clearInterval(idhr)
                clearInterval(idmin);
                clearInterval(idsec);
            }
        
        }
    return () => {
            clearInterval(idsec);
            clearInterval(idmin);
            clearInterval(idhr);
        }
    }, [hr, min, sec, timeOn])

    const handleStart = () => {
        setTimeOn(true);
    }
    const handleStop = () => {
        setTimeOn(false)
    }
    const handleReset = () => {
        setHr(0);
        setMin(0);
        setSec(0);
        setTimeOn(false)
    }
    return (<div className="timer">
         <h1>Timer</h1>
         <div >
                HR: <input type="number" placeholder="00h" onChange={(e) => setHr(parseInt(e.target.value))} value={hr} />
                MIN: <input type="number" placeholder="00m" onChange={(e) => setMin(parseInt(e.target.value))} value={min} />
                SEC: <input type="number" placeholder="00s" onChange={(e) => setSec(parseInt(e.target.value))} value={sec} />
            </div>
           <div >
                <button  onClick={handleStart}>START</button>
                <button  onClick={handleStop}>STOP</button>
                <button  onClick={handleReset}>RESET</button>
            </div>
    </div>)
}