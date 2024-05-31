import { useState } from "react"

export default function LiElement(props){

     let [doneStyle, setDoneStyle]= useState(false)
        
    function doneTask(){
        setDoneStyle(prevValue=>{
            return !prevValue
        })
    }
    return <div>
                <li 
                    onClick={doneTask}
                    onDoubleClick={()=>{props.toDelete(props.id)}} 
                    style={{textDecoration: doneStyle ? "line-through":'none'}} 
                    id={props.id} >
                    {props.element}
                </li>
                <button>Botãozinho</button>
            </div>
}

