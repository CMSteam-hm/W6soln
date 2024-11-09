const express = require('express');
const router = express.Router();
const Expense = require('../models/expense'); // Assuming your model is called Expense

// Endpoint to get all expenses for a specific user
router.get('/history', async (req, res) => {
  try {
    // Modify to filter by user ID if necessary
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
});

module.exports = router;
