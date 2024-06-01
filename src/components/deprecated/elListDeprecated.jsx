// Utilizei esse componente na primeira versão do App e depois foi substituido mas deixei arquivado como referencia.

import { useState } from "react"
export default function LiElement(props){
    let [doneStyle, setDoneStyle]= useState()
    function doneTask(){
        setDoneStyle({textDecoration:"line-through"})
}
return <li 
            onClick={doneTask} 
            style={doneStyle} 
            key={props.key} 
            >{props.element}
        </li>
}

