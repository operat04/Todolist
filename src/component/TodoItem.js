import {IoIosArrowDropdownCircle , IoIosArrowDropdown} from "react-icons/io"
import {AiFillDelete} from "react-icons/ai"
const TodoItem =( {todo , onCheckToggle , deleteTodos , onInputToggle , onChangeselectedText} )=>{
    const { id, text,isComplete } = todo;
    return (
    <div className="TodoItem">
        <div className={`content ${isComplete ? "checked" : ""}`}>
            {isComplete ? 
            <IoIosArrowDropdownCircle onClick={()=>onCheckToggle(id,text,isComplete)} /> 
            : <IoIosArrowDropdown onClick={()=>onCheckToggle(id,text,isComplete)} />}
            <div className="text" onClick={()=>{
                onChangeselectedText(todo);
                onInputToggle()
            }}>{text}</div>
            <div><AiFillDelete onClick={()=>deleteTodos(id)} /></div>
        </div>

    </div>
    );
};

export default TodoItem;