import React, { useState } from "react";

function Button() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = `Elemento ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Lista Dinámica</h1>
      <button onClick={addItem}>Agregar Contenido</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Button;
