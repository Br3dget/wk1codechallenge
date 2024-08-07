//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import TransactionTable from './Components/TransactionTable';
import TransactionForm from './Components/TransactionForm';


function App() {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
          .then(response => response.json())
          .then(data => setTransactions(data));
      }, []);

      const addTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
      };

      const filteredTransactions = transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
        <div className="App">
        <header className="App-header">
          <h1>Bank of Flatiron</h1>
        </header>
        <main>
          <TransactionForm addTransaction={addTransaction} />
          <input
            type="text"
            placeholder="Search transactions"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <TransactionTable transactions={filteredTransactions} />
        </main>
      </div>
      );
}

export default App;
