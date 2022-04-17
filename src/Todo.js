import React,{useState} from 'react'



function App() {

  const[todos,setTodos]=useState([]);
  const[todo,setTodo]=useState("")

  
  return (
    <div className="App">
      <h1>Daily</h1>
      <div className="input">
        
        <input className='inp' type="text" value={todo}  onChange={(e)=>setTodo(e.target.value)} placeholder="Type your todo" />

        <button className='btn' onClick={()=>{setTodos([...todos,todo])}}>Add</button> 
      </div>
        {
          todos.map((value)=>{
            return(
              <div className="todos">
                <div className="todoContent">
                  <p>{value}</p>
                </div>
              </div>
            )
          })
        }
      
    </div>
  );
}

export default App;

