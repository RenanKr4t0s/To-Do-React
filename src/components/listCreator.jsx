import LiElement from "./elementList"

export default function ListCreator(props){
    
    let list = props.array.map((element, index)=>{
        return <LiElement id={index} 
                    element={element} 
                    toDelete={props.toDelete} 
                    showInput={props.showInput}
                />
    })
    return <ul>{list}</ul>
}