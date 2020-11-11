import React from 'react'

// Recoil
import { useRecoilState, useRecoilValue } from 'recoil'
import { todoState } from '../recoils/atoms/todoState.js'
import { todoSelector } from '../recoils/selectors/todoSelector.js'

// Components
import { Form } from '../organisms/Form.jsx'
import { List } from '../organisms/List.jsx'

// TodoPage
export const Todo = () => {
  // Recoil State
  const [ todos, setTodos ] = useRecoilState(todoState)

  // Recoil Selector
  const count = useRecoilValue(todoSelector)

  // Add Todo Event
  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  return (
    <>
      <Form addAction={addTodo} />
      <p>count: {count}</p>
      <List todos={todos} />
    </>
  )
}
