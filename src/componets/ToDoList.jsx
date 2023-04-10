import React, { useState, useEffect } from "react";

function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddItem(event) {
    event.preventDefault();
    if (inputValue) {
      const newItem = { id: Date.now(), text: inputValue };
      setItems((prevItems) => [...prevItems, newItem]);
      localStorage.setItem(
        "todo-list",
        JSON.stringify([...items, newItem])
      );
      setInputValue("");
    }
  }

  function handleClearItems() {
    setItems([]);
    localStorage.removeItem("todo-list");
  }

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("todo-list"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  return (
    <div>
      <h1>ToDo List TP-REACT</h1>
      <form onSubmit={handleAddItem}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button onClick={handleClearItems}>Borrar</button>
    </div>
  );
}

export default TodoList;
