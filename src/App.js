import React from 'react';
import './App.css';
import TodoList from './component/TodoList';
import Header from './component/Header'
import Input from './component/Input'
import Template from './component/Template';
import {useEffect , useState} from 'react'


function App() {
  const [seletedText,setSelecteText] = useState(null)
  const [inputToggle,setInputToggle] = useState(false)
  const [todos , setTodos] = useState([]);

  const onInputToggle = ()=>{
    if(seletedText){
      setSelecteText(null)
    }
    setInputToggle(!inputToggle)
  }

  useEffect(()=>{
    fetch("http://localhost:3001/todos")
    .then(data=>data.json())
    .then(data=>{
      setTodos(data)
    })
  },[])

  const onInputTodo = (text) =>{
    if(text===""){
      return alert("할 일을 입력해주세요.")
    }else{
      fetch('http://localhost:3001/todos/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "text" : text,
              "isComplete" : false 
            })
      })
      .then(data=>data.json())
      .then(data=>{
        setTodos([...todos,data])
      })
    }
  }

  // const onCheckToggle = (id)=>{
  //   setTodos(todos=>todos.map((todo)=> todo.id===id ? {...todo , isComplete : !todo.isComplete} : todo))
  // }
  const onCheckToggle = (id , text , isComplete)=>{
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "text" : text,
        "isComplete" : !isComplete
      })
    })
    .then(()=>{
      window.location.reload();
    })
  }

  const onUpdate = (id,text)=>{
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "text" : text
      })
    })
    .then(()=>{
      window.location.reload();
    })
  }

  const deleteTodos= (id)=>{
    fetch(`http://localhost:3001/todos/${id}`,{
      method : "DELETE",
    })
    .then(()=>{
      window.location.reload();
    })
  }

  const allDeletetodos = ()=>{
    for(let i=1; i<=todos.length; i++){
      fetch(`http://localhost:3001/todos/${i}`,{
        method : "DELETE",
      })
    }
    window.location.reload();
  }

  const onChangeselectedText = (todo)=>{
    setSelecteText(todo)
  }

  return (
    <div className="App">
      <Header todos={todos} />
      <div className='button-container'>
      <button onClick={onInputToggle} className='add-todo-button'>
        할 일 추가하기
      </button>
      <button className='delete-all' onClick={allDeletetodos}>전체 비우기</button>
      </div>
      <Template >
        <TodoList 
        todos={todos} 
        onCheckToggle={onCheckToggle} 
        deleteTodos={deleteTodos} 
        onInputToggle={onInputToggle}
        onChangeselectedText={onChangeselectedText}
        />
        {inputToggle && <Input onInputToggle={onInputToggle} onInputTodo={onInputTodo} seletedText={seletedText} onUpdate={onUpdate} />}
      </Template>
    </div>
  );
}

export default App;
