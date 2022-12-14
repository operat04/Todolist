import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ( {todos , onCheckToggle ,deleteTodos ,onInputToggle ,onChangeselectedText} )=>{
    return (<div className="TodoList">
        {todos.map(todo => (<TodoItem 
        todo={todo} key={todo.id} 
        onCheckToggle={onCheckToggle} 
        deleteTodos={deleteTodos} 
        onInputToggle={onInputToggle}
        onChangeselectedText = {onChangeselectedText}
        />))}
    </div>
    );
}
export default TodoList;