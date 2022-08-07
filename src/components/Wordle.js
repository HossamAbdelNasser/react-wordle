import React, { useEffect, useState, useRef } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from "./Grid"
import Keypad from "./Keypad"
import Modal from "./Modal"

const Wordle = ({ solution }) => {

    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution)
    const [showModal, setShowModal] = useState(false)
    const modalRef = useRef(false)

    useEffect(()=>{
         window.addEventListener('keyup', handleKeyup);
        return ()=> {
          window.removeEventListener('keyup', handleKeyup);
        }
    }, [handleKeyup, isCorrect, turn])

    useEffect(()=>{
      let win = null;
      let loss = null;

      if (isCorrect){
        win = setTimeout(()=>{setShowModal(true)}, 1800)
        window.removeEventListener('keyup', handleKeyup)
        window.addEventListener('click', ()=> setShowModal(false))
      }

      if (turn > 5){
        loss = setTimeout(()=>{setShowModal(true)}, 1800)
        window.removeEventListener('keyup', handleKeyup)
        window.addEventListener('click', ()=> setShowModal(false))
      }

      return ()=> {
        window.removeEventListener('keyup', handleKeyup)
        clearTimeout(win)
        clearTimeout(loss)
      }
    },[isCorrect, turn])
 
  return (
    <>
    <div> Solution: {solution}</div>
    <div> Current Guess: {currentGuess}</div>
    <Grid currentGuess = {currentGuess} guesses = {guesses} turn = {turn}/>
    <Keypad usedKeys = { usedKeys } />
    {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}

    </>
  )
}

export default Wordle