import { useState } from "react";
import "./App.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState(false);
  const [currentId, setCurrentId] = useState(1); // initialize the ID to 1

  const handleAddTodo = () => {
    if (!newTodo) return;
    const newId = currentId + 1; // generate a new ID
    setTodos([...todos, { id: newId, name: newTodo, completed: false }]);
    setCurrentId(newId); // update the current ID to the new ID
    setNewTodo("");
    console.log(todos); // Check the todos array in the console
  };

  const handleToggleCompleted = (id) => {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex((todo) => todo.id === id);
    updatedTodos[index].completed = !updatedTodos[index].completed;
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
          .filter((todo) => !filter || !todo.completed) // filter out completed todos
          .map((todo, i) => (
            <li
              key={todo.id}
              style={{
                backgroundColor: todo.completed ? "skyblue" : "cadetblue",
              }}
            >
              <input
                type="checkbox"
                id={`todo${todo.id}`}
                checked={todo.completed}
                onChange={() => handleToggleCompleted(todo.id)}
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
