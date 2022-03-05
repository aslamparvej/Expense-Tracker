import express from "express";
import mongoose from "mongoose";
import User from "../models/userModel.js";

const router = express.Router();

export const getUser = async (req, res) => {
  try {
    const user = userModel.find();

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createUser = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const name = req.body.name;

  const user = new User({
    username,
    email,
    name,
  });

  try {
    await user.save();
    
    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }

};

export default router;
