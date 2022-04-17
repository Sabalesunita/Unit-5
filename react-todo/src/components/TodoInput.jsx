import { useState } from "react";
import "./TodoInput.css"

function Todoinput({getData}){
    const [text, setText]= useState("")
    
    return (
        <div className="inputclass">
       
            <input className="todoinput" onChange={(e)=>(
                setText(e.target.value)
            )} type="text" placeholder="Enter Todos"></input>
            <button className="todobtn" onClick={()=>{
               getData(text);
            }}>+</button>
            <todoItem/>
        </div>
    )
}
export default Todoinput