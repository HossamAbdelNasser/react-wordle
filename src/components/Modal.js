
const Modal = ( {isCorrect, turn, solution} ) => {

  return (
    <div className='modal'>
       {isCorrect && (
         <div> 
           <h1>You Win</h1>
           <p className="solution">{solution}</p>
           <p> you found the solution after {turn} guesses</p>
            </div>
       )}
       {!isCorrect && (
         <div> 
           <h1>Better luck next time</h1>
            </div>
       )}
    </div>
  )
}

export default Modal