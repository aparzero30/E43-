import { useState } from "react";
import "./App.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState(false);

  const handleAddTodo = () => {
    if (!newTodo) return;
    setTodos([...todos, { name: newTodo, completed: false }]);
    setNewTodo("");
    console.log(todos); // Check the todos array in the console
  };

  const handleToggleCompleted = (i) => {
    const updatedTodos = [...todos];
    updatedTodos[i].completed = !updatedTodos[i].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="wrapper">
      <h1>TodoList</h1>
      <div className="inputs">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={(e) => handleAddTodo()}>Add Todo</button>
      </div>
      <h3>
        <input
          type="checkbox"
          id="myCheckbox"
          checked={filter}
          onChange={(e) => setFilter(e.target.checked)}
        ></input>
        Hide Completed Task
      </h3>

      <ul id="myUl">
        {todos
          .filter((todo) => !filter || !todo.completed)
          .map((todo, i) => (
            <li
              key={i}
              style={{
                backgroundColor: todo.completed ? "skyblue" : "cadetblue",
              }}
            >
              <input
                type="checkbox"
                id={`todo${i}`}
                checked={todo.completed}
                onChange={() => handleToggleCompleted(i)}
                className="licb"
              />
              {todo.completed ? <s>{todo.name}</s> : todo.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
