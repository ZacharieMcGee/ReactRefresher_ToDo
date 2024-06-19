import Todocard from './Todocard'

export default function Todolist(props) {
  const { todos } = props
  
  return (
    <ul className="main">
      {
        todos.map((todo, index) => {
          return (
            <Todocard {...props} key={index} idx={index}>
              <p>{todo}</p>
            </Todocard>
          )
        })
      }
    </ul>
  )
}
