export default function InputArea(props){
    return(
        <div className="form">
            <input onChange={props.saveText} type="text" name="content" value={props.input}/>
            <button onClick={props.saveInput}>
                <span>Adicionar</span>
            </button>
        </div>
    )
}

