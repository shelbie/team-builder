import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from "./Form"
import Card from "./Card"
import './App.css';
import data from "./data"



function App() {
  const [cards, setCards] = useState(data);

  const addCard = newCard => {
    setCard([...cards, newCard]);
  };

  return (
    <div className="App">
      <h1>WEBPT16 5th Day Cohort Team List</h1>
      <Form addCard={addCard}/>
      <Card cards={cards}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
