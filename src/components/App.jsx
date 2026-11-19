import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  // All toys from the backend; shared by the form, container, and cards
  const [toys, setToys] = useState([]);

  // GET: load all toys once, when the page first renders
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => setToys(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Add the toy returned by the server to the end of the list
  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  // Remove the deleted toy from state
  function handleDeleteToy(id) {
    setToys(toys.filter((toy) => toy.id !== id));
  }

  // Swap in the updated toy, keeping every toy in its original position
  function handleUpdateToy(updatedToy) {
    setToys(toys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy)));
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;