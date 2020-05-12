import React, { useState } from 'react';
import Form from "./Form"
import Card from "./Card"
import './App.css';
import data from "./data"



function App() {
  const [cards, setCards] = useState(data);

  const addCard = newCard => {
    setCards([...cards, newCard]);
  };

  return (
    <div className="App">
      <h1>WEBPT16 5th Day Cohort Team List</h1>
      <Form addCard={addCard}/>
      <Card cards={cards}/>
    </div>
  );
}

export default App;