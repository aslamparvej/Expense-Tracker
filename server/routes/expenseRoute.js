import express from "express";

import {getExpense,createExpense} from "../controllers/expense.js";

const router = express.Router();

router.get('/',getExpense);
router.post('/createExpense',createExpense);

export default router;
