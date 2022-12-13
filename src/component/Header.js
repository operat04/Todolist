function header({todos}){
    return(
        <div>
            <h1 className="title">오늘의 할 일({todos.length})</h1>
        </div>
    )
}

export default header;