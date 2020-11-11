import React, { useState } from 'react'

// Todo Form
export const Form = ({addAction = false}) => {
  // ReactState
  const [todo, setTodo] = useState('')

  // Change Event
  const changeEvent = e => {
    setTodo(e.target.value)
  }

  return (
    <>
      <input type='text' value={todo} onChange={changeEvent} />
      <input type='button' onClick={() => addAction(todo)} value='add'/>
    </>
  )
}
