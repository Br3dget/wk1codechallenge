import React, {useState} from 'react'

function TransactionForm({ addTransaction }) {
    const [formData, setFormData]= useState({
        date: '',
        description: '',
        category: '',
        amount: '',

    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/transactions', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((newTransaction) =>{
            addTransaction(newTransaction);
            setFormData({ date: '', description: '', category:'', amount: ''});
        });
    };
  return (
    <form onSubmit={handleSubmit}>
   
    </form>
  );
}

export default TransactionForm;