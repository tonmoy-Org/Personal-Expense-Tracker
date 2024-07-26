import React, { useState, useContext } from 'react';
import { TextField, Button, MenuItem, Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { ExpenseContext } from '../redux/ExpenseContext';

const categories = ['Food', 'Transportation', 'Utilities', 'Entertainment', 'Other'];

const ExpenseForm: React.FC = () => {
    const { dispatch } = useContext(ExpenseContext);
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newExpense = { id: uuidv4(), amount: parseFloat(amount), category, date };
        dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
        setAmount('');
        setCategory('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label="Amount"
                        type='number'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        select
                        label="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        fullWidth
                    >
                        {categories.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label="Date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Add Expense
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default ExpenseForm;
