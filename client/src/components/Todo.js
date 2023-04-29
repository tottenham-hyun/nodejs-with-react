import { useRef, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import CloseButton from "react-bootstrap/CloseButton"
import '../styles/Todo.scss'


const Todo = ({ item, deleteItem }) => {
  const didRef = useRef()
  console.log(item) // {done: false, id: 1, title: "저녁먹기"}
  const [todoItem, setTodoItem] = useState(item)
  const [readOnly, setReadOnly] = useState(true)

  const onDeleteButtonClick = () => {
    deleteItem(todoItem)
  }

  // title input 을 클릭; readOnly state를 false로 변경
  const offReadOnlyMode = () => {
    setReadOnly(false) // title input이 편집이 가능한 상태
  }

  // title input 에서 enter키; readOnly state를 true로 변경
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true)
    }
  }

  // 사용자가 키보드 입력할 때마다 item의 title을 입력한 값으로 변경
  const editEventHandler = (e) => {
    // rest: id, done 정보
    const { title, ...rest } = todoItem

    setTodoItem({
      title: e.target.value,
      ...rest,
    })
  }

  // checkbox의 체크 여부에 따라 todoItem state의 done 상태값을 변경
  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem
    setTodoItem({
      done: e.target.checked,
      ...rest,
    })
    // if (e.target.checked == true) {
    //   didRef.current.style.textDecoration = "line-through"
    // } else {
    //   didRef.current.style.textDecoration = "none"
    // }
  }
  return (
    <div className="Todo">
      <InputGroup className="mb-3">
        <InputGroup.Checkbox
          type='checkbox'
          id={`todo${item.id}`}
          name={`todo${item.id}`}
          value={`todo${item.id}`}
          defaultChecked={item.done}
          onChange={checkboxEventHandler}
          className='todo_input'
        />
        <Form.Control
          type="text"
          value={todoItem.title}
          onClick={offReadOnlyMode}
          onKeyPress={enterKeyEventHandler}
          onChange={editEventHandler}
          className="todo_title"
        />
        <CloseButton
          onClick={onDeleteButtonClick}
          style={{ marginTop: "6px", marginLeft: "4px" }}
        />
      </InputGroup>
    </div>
  )
}

export default Todo
