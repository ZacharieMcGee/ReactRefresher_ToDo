import { useState } from "react"

export default function Todoinput(props) {
  const { 
    todoValue, 
    setTodoValue, 
    handleAddTodos 
  } = props

  const [placeholderValue, setPlaceholderValue] = useState('Enter todo...')

  return (
    <header>
      <input 
        placeholder={placeholderValue} 
        value={todoValue} 
        onChange={e => setTodoValue(e.target.value)}
      />
      <button 
        onClick={() => {
          if (todoValue) {
            handleAddTodos(todoValue)
            setTodoValue('')
            setPlaceholderValue('Enter todo...')
          } else {
            setPlaceholderValue('Please enter todo...')
          }
        }}
      >Add</button>
    </header>
  )
}