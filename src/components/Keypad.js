import React, {useState, useEffect} from 'react'

const Keypad = ({ usedKeys }) => {

    const [letters, setLetters] = useState('')

    useEffect(()=>{
        fetch("http://localhost:3001/letters")
        .then(res => res.json()) 
        .then (json =>{
            setLetters(json)
        })
      }, [])

  return (
    <div className='keypad'>
        {letters && letters.map((l)=>{
            let color = usedKeys[l.key]
           return <div key={l.key} className={color}>{l.key}</div>
        })}
    </div>
  )
}

export default Keypad