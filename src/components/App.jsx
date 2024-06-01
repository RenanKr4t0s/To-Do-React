import { useState } from "react";
import ListCreator from "./listCreator";
import InputArea from "./inputArea";

function App() {
let [input, setInput] = useState([]);
let [fullList, setFullList] = useState([])

function saveText(e){
  setInput(e.target.value)
}

function saveInput(){
  setFullList(oldList => [...oldList, input])
  setInput("")
}
function showInput(content){
  setInput(content)
}

function deleteItem(id, safe){
  if (safe){
    window.confirm("Quer mesmo apagar o item?")?(
      setFullList((oldList)=>{
        return oldList.filter((e, index)=>{
          return index !== id
        })
      })
    ) : window.alert("To-Do Não Deletado")
  } else{
    setFullList((oldList)=>{
      return oldList.filter((e, index)=>{
        return index !== id
      })
    })
    console.log("Nada")
  }
}


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      < InputArea
        saveText = {saveText}
        input = {input}
        saveInput = {saveInput}
       />
      <div>
        < ListCreator toDelete={deleteItem} array={fullList} showInput={showInput} />
      </div>
    </div>
  );
}

export default App;
