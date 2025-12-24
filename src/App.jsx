import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [todo, setTodo] = useState("")
  const handleEdit = ()=>{

  }

  const handleDelete = ()=>{

  }

  return (
    <>
    <Navbar />

    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] ">
      <div className="addTodo my-5">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input type="text"  className='w-2/4 border-1'/>
        <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 text-white rounded-md p-3 py-2  mx-6 text-sm font-bold'>Add</button>
      </div>

      <h2 className='text-lg font-bold'>Your Todos</h2>

      <div className="todos">
        <div className="todo flex">
          <div className="text">{todo}</div>
          <div className="buttons">
            <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 text-white rounded-md p-3 py-2  mx-1 text-sm font-bold'>Edit</button>
            <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 text-white rounded-md p-3 py-2  mx-1 text-sm font-bold'>Delete</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
