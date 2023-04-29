import { useState, useRef } from "react"
import "../styles/AddTodo.scss"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

const AddTodo = (props) => {
  const todoInput = useRef()
  const [todoItem, setTodoItem] = useState({
    title: "",
  })
  const onButtonClick = () => {
    console.log(todoItem)
    if (todoItem.title == "") {
      todoInput.current.focus()
    } else {
      // 1. props addItem 함수 실행
      props.addItem(todoItem)
      setTodoItem("")
    }
  }

  const onEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      onButtonClick()
    }
  }

  return (
    <div className="AddTodo">
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add your new Todo"
          value={todoItem.title}
          onChange={(e) => {
            setTodoItem({ title: e.target.value })
          }}
          onkeydown={onEnterKeyDown}
          ref={todoInput}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={onButtonClick}>
          ADD
        </Button>
      </InputGroup>
    </div>
  )
}

export default AddTodo
