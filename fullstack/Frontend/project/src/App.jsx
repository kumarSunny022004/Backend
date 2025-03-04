import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
const [jokes ,  setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{setJokes(res.data)})
  })

  return (
   <>
   <h1>Sunny is the best</h1>
   <p>JOKES: {jokes.length}</p>
   {
    jokes.map((joke , id)=>(
      <div key={joke.id}>
        <h3>{joke.title}</h3>
        <p>{joke.content}</p>
      </div>
    ))
   }
   </>
  )
}

export default App
