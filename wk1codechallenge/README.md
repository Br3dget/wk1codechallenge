# BANK OF FLATIRON
# Bank of Flatiron - Transaction Tracker

## Introduction

Welcome to the **Bank of Flatiron Transaction Tracker**! This React application allows users to view, add, filter, and manage their recent bank transactions. It is designed as a mini web app to practice components, props, state, events, and data fetching in React.

## Features

- **View Transactions**: Displays a table of all transactions fetched from a local JSON server.
- **Add New Transactions**: Users can fill out a form to add a new transaction to the table.
- **Filter Transactions**: Filter transactions by typing into the search bar; only transactions with a description matching the search term will be shown.
- **Bonus Features**:
  - Sort transactions alphabetically by category or description.
  - Delete transactions from the table.

## Project Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Getting Started

1. **Clone the Repository**:
2.Install Dependencies: 
 Set Up JSON Server:

    Create a db.json file in the root of your project directory with the following content:
    {
  "transactions": [
    {
      "id": "1",
      "date": "2019-12-01",
      "description": "Paycheck from Bob's Burgers",
      "category": "Income",
      "amount": 1000
    },
    {
      "id": "2",
      "date": "2019-12-01",
      "description": "South by Southwest Quinoa Bowl at Fresh & Co",
      "category": "Food",
      "amount": -10.55
    },
    {
      "id": "3",
      "date": "2019-12-02",
      "description": "South by Southwest Quinoa Bowl at Fresh & Co",
      "category": "Food",
      "amount": -10.55
    },
    {
      "id": "4",
      "date": "2019-12-04",
      "description": "Sunglasses, Urban Outfitters",
      "category": "Fashion",
      "amount": -24.99
    },
    {
      "id": "5",
      "date": "2019-12-06",
      "description": "Venmo, Alice Pays you for Burrito",
      "category": "Food",
      "amount": 8.75
    },
    {
      "id": "6",
      "date": "2019-12-06",
      "description": "Chipotle",
      "category": "Food",
      "amount": -17.59
    },
    {
      "id": "7",
      "date": "2019-12-07",
      "description": "Birthday Check from Grandma",
      "category": "Gift",
      "amount": 50
    },
    {
      "id": "8",
      "date": "2019-12-09",
      "description": "Lyft Ride",
      "category": "Transportation",
      "amount": -13.25
    },
    {
      "id": "9",
      "date": "2019-12-11",
      "description": "Paycheck from Bob's Burgers",
      "category": "Income",
      "amount": 1000
    },
    {
      "id": "10",
      "date": "2019-12-16",
      "description": "Tickets, Flatiron Multiplex Cinemas",
      "category": "Entertainment",
      "amount": -24
    },
    {
      "id": "11",
      "date": "2019-12-16",
      "description": "MTA Vending Machine: MetroCard",
      "category": "Transportation",
      "amount": -116.39
    },
    {
      "id": "12",
      "date": "2019-12-17",
      "description": "Venmo, Pay Roommate for Rent",
      "category": "Housing",
      "amount": -975
    },
    {
      "id": "8994",
      "date": "2019",
      "description": "paycheck",
      "category": "income",
      "amount": "1000"
    }
  ]
}

Start the JSON server:
npx json-server --watch db.json --port 3000

4. Run the Application:
npm start


Project Structure

    src/
        components/
            TransactionTable.js: Renders the table of transactions.
            TransactionForm.js: Form to add new transactions.
            SearchBar.js: Input field to filter transactions.
        App.js: Main component that manages state and handles data fetching.
        index.js: Entry point of the React application.


This project is written by Bridget Njoki.
