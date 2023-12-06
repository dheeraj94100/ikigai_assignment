import { useState } from "react";
import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <h1 className="todo_head">To-Do List</h1>
          <div className="todo_top">
            <input
              type="text"
              value={inputValue}
              className="form-control"
              onChange={handleInputChange}
              placeholder="Enter a new todo"
            />
            <button
              type="button"
              className="btn"
              onClick={handleAddTodo}
            >
              Add
            </button>
          </div>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
