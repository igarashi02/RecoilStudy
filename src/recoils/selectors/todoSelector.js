// Recoil
import { selector } from 'recoil'

// Recoil State
import { todoState } from '../atoms/todoState'

// Selector
export const todoSelector = selector({
  key: 'todoSelector',
  get: ({get}) => {
    // Return Todo Count
    const todos = get(todoState)
    return todos.length
  }
})
