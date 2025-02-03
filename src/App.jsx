import { useState } from 'react'
import './App.css'

function App() {

  let [x,setx]=useState(0)

  const addvalue = ()=>{
    if(x<20){
    setx(x+1)
    }
  }

  const subvalue = ()=>{
    if(x!==0){
    setx(x-1)
    }
    else{

    }
  }

  let setzero=()=>{
    setx(0)
  }

  return (
    <>
    <div>
    <h1>hello Everyone</h1>
    <h2>Your count: {x}</h2>
    <button onClick={addvalue}>Add</button>
    <button onClick={subvalue} >subtract</button>
    <button onClick={setzero} >set zero</button>
    </div>
     
    </>
  )
}

export default App
