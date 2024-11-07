// backend/controllers/transactionController.js
const Transaction = require('../models/transaction');

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching transactions' });
  }
};

exports.addTransaction = async (req, res) => {
  const { type, name, amount, date } = req.body;
  try {
    const newTransaction = await Transaction.create({ type, name, amount, date });
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ error: 'Error adding transaction' });
  }
};
