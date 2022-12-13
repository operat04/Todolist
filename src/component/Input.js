import { useState,useParams } from "react"

function Input({onInputToggle , onInputTodo}){

    const[value,setValue] = useState("");

    const onChangeValue = (e) =>{
        setValue(e.target.value)
    };

    const onSubmit = (e)=>{
        e.preventDefault();
        onInputTodo(value);
        setValue("");
        onInputToggle();
    }
    return(
        <>
        <div className="background" onClick={onInputToggle}></div>
        <form onSubmit = {onSubmit}>
            <input placeholder="할 일을 입력하세요" value={value} onChange={onChangeValue}></input>
            <button className="submit-button" type="submit" >
                추가하기
            </button>
        </form>
        </>
            
    )
}

export default Input