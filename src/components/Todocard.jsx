export default function Todocard(props) {
  const { 
    children,
    handleDeleteTodo,
    handleEditTodo,
    idx 
  } = props

  return (
    <li className="todoItem" >
      <div className='actionsContainer'>
        {children}
        <button onClick={() => handleEditTodo(idx)}>
        <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(idx)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  )
}
