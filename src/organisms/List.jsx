import React from 'react'

// TodoList
export const List = ({todos = []}) => {
  return (
    <ul>
      {todos.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </ul>
  )
}
