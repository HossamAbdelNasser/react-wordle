import './App.css'
import Header from "./components/Header"
import { useState, useEffect } from 'react'
import Wordle from "./components/Wordle"


function App() {

  const [solution, setSolution] = useState(null)

  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/HossamAbdelNasser/react-wordle/words")
    .then(res => res.json()) 
    .then (data =>{
      const randomSolution = data[Math.floor(Math.random()*data.length)]
      setSolution(randomSolution.word)
      console.log(randomSolution.word)
    })
  })
  
  return (
    <div className="App">
      <Header/>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
