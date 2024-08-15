//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import TransactionTable from './Components/TransactionTable';
import TransactionForm from './Components/TransactionForm';


function App() {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchTransactions = async () => {
          try {
              const response = await fetch('http://localhost:3001/transactions');
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              if (Array.isArray(data)) {
                  setTransactions(data);
              } else {
                  throw new Error('Unexpected data format');
              }
          } catch (error) {
              console.error('Fetch error:', error);
              setError(error.message);
          } finally {
              setIsLoading(false);
          }
      };

      fetchTransactions();
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
          {isLoading ? (
                    <p>Loading transactions...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <TransactionTable transactions={filteredTransactions} />
                )}
            </main>
      </div>
      );
}

export default App;
