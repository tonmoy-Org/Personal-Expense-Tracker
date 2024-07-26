import React, { createContext, useReducer, ReactNode } from 'react';

interface Expense {
    id: string;
    amount: number;
    category: string;
    date: string;
}

interface ExpenseState {
    expenses: Expense[];
}

const initialState: ExpenseState = {
    expenses: [],
};

type Action =
    | { type: 'ADD_EXPENSE'; payload: Expense }
    | { type: 'DELETE_EXPENSE'; payload: string }
    | { type: 'EDIT_EXPENSE'; payload: Expense };

const expenseReducer = (state: ExpenseState, action: Action): ExpenseState => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return { ...state, expenses: [...state.expenses, action.payload] };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload),
            };
        case 'EDIT_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.id === action.payload.id ? action.payload : expense
                ),
            };
        default:
            return state;
    }
};

export const ExpenseContext = createContext<{
    state: ExpenseState;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
});

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(expenseReducer, initialState);

    return (
        <ExpenseContext.Provider value={{ state, dispatch }}>
            {children}
        </ExpenseContext.Provider>
    );
};
