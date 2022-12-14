import { useState,useParams, useEffect } from "react"

function Input({onInputToggle , onInputTodo , seletedText , onUpdate}){

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

    useEffect(()=>{
        if(seletedText){
            setValue(seletedText.text)
        }
    },[seletedText])

    return(
        <>
        <div className="background" onClick={onInputToggle}></div>
        <form onSubmit = {seletedText ? ()=>{onUpdate(seletedText.id,value)} : onSubmit}>
            <input placeholder="할 일을 입력하세요" value={value} onChange={onChangeValue}></input>
            <button className="submit-button" type="submit" >
                {seletedText ? "수정하기" : "추가하기"}
            </button>
        </form>
        </>
            
    )
}

export default Input