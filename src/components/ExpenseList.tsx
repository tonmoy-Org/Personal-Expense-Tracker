import React, { useContext } from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ExpenseContext } from '../redux/ExpenseContext';

const ExpenseList: React.FC = () => {
    const { state, dispatch } = useContext(ExpenseContext);

    const handleDelete = (id: string) => {
        dispatch({ type: 'DELETE_EXPENSE', payload: id });
    };

    return (
        <List>
            {state.expenses.map((expense) => (
                <ListItem key={expense.id}>
                    <ListItemText primary={expense.category} secondary={`$${expense.amount} on ${expense.date}`} />
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(expense.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
        </List>
    );
};

export default ExpenseList;
