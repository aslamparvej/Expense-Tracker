import express from "express";
import mongoose from "mongoose";
import Expense from "../models/userModel.js";

const router = express.Router();

export const getExpense = async (req, res) => {
  try {
    const expense = userModel.find();

    res.status(200).json(expense);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createExpense = async (req, res) => {
  const title = req.body.title;
  const amount = Number(req.body.amount);
  const date = Date.parse(req.body.date);
  const time = Number(req.body.time);

  const expense = new Expense({
    title,
    amount,
    date,
    time
  });

  try {
    await expense.save();

    res.status(201).json(expense);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;
