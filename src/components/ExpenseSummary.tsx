import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { ExpenseContext } from '../redux/ExpenseContext';

const ExpenseSummary: React.FC = () => {
    const { state } = useContext(ExpenseContext);

    const totalExpenses = state.expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const expensesByCategory = state.expenses.reduce((acc: any, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});

    return (
        <div>
            <Typography variant="h5">Total Spending: ${totalExpenses.toFixed(2)}</Typography>
            {Object.keys(expensesByCategory).map((category) => (
                <Typography key={category} variant="body1">
                    {category}: ${expensesByCategory[category].toFixed(2)}
                </Typography>
            ))}
        </div>
    );
};

export default ExpenseSummary;
