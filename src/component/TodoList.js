import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ( {todos , onCheckToggle ,deleteTodos} )=>{
    return (<div className="TodoList">
        {todos.map(todo => (<TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle} deleteTodos={deleteTodos} />))}
    </div>
    );
}
export default TodoList;