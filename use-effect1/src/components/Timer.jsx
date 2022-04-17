import { useEffect, useState } from "react";

 function Timer(){
    const [counter, setCounter]=useState(0);
   
    useEffect(()=>{
        let id=setInterval(()=>{
            setCounter((prevVal)=>{
                if(prevVal>=9)
                {
                    clearInterval(id);
                }
                console.log("setting", prevVal)
                return (prevVal+(1))
            })
        },1000)

        return ()=>{
            clearInterval(id)
        }

    },[])

     return(
         <div>
             <h1>Timer:{counter}</h1>
         </div>
         
     )
 }
 export default Timer;