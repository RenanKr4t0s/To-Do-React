import { useState } from "react"

export default function LiElement(props){

     let [doneStyle, setDoneStyle]= useState(false)
        
    function doneTask(){
        setDoneStyle(prevValue=>{
            return !prevValue
        })
    }

    function editContent(e){
        let content = e.target.previousSibling.textContent
        props.showInput(content);
        props.toDelete(props.id, false)

    }
    return <li className="item__lister">
                <span 
                    onClick={doneTask}
                    onDoubleClick={()=>{props.toDelete(props.id, true)}} 
                    style={{textDecoration: doneStyle ? "line-through":'none'}} 
                    id={props.id} >
                    {props.element}
                </span>
                <button onClick={editContent}>Edit</button>
            </li>
}

