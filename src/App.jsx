import { useContext, useState } from 'react'
import Userdata from './contex/contex'
import './App.css'

function App() {
  const [nam,setnam] = useState("")
  const {setname} = useContext(Userdata)
  const {name} = useContext(Userdata)

  function sub(e){
    e.preventDefault
    setname(nam)
  }
  return (
    <>
    
      <body>
      <input value={nam} type='text' onChange={(e)=>setnam(e.target.value.toUpperCase())}/>
      <button type='submit' onClick={sub}>Submit</button>
      <h2>your name is:- {name}</h2>
      <div className="grid">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
      </body>
      
    </>
  )
}

export default App
