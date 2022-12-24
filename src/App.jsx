import React from "react";
import "../src/Index.css";
import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data.js";

function App() {
  const cards = data.map((card) => <Card key={card.title} card={card} />);

  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
