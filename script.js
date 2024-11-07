// Fetch transactions from the backend API
async function getTransactions() {
    const response = await fetch('http://localhost:5000/api/transactions');
    const transactions = await response.json();
    // Render transactions to the page...
  }
  
  // Add a new transaction
  async function addTransaction(transaction) {
    await fetch('http://localhost:5000/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    });
    getTransactions(); // Refresh transactions list
  }
  