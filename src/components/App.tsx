import React, {useState, FormEvent, ChangeEvent} from "react"
import { Todo } from "../interfaces/Todo"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const App = () => {
    const [todos, setTodos] = useState<Array<Todo>>([])
    const [todoValue, setTodoValue] = useState("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setTodos(previousTodos => [
            ...previousTodos,
            {
                task: todoValue,
                finished: false
            }
        ])

        setTodoValue("")
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodoValue(event.currentTarget.value)
    }

    return (
    <>
        <h1>Welcome to my TODO app</h1>
        <TodoList todos={todos}/>
        <TodoForm 
            onSubmit={handleSubmit} 
            onInputChange={handleChange}
            inputValue={todoValue}/>

    </>
    )
}

export default App