import React from "react";
import "./App.css";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h1>The Royal Bank of Flatiron</h1>
      </div>
      <TransactionList />
    </div>
  );
}

export default App;
