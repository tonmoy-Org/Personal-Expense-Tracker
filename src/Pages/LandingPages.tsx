import React from 'react';
import { Container, Grid, Box, Typography, Paper } from '@mui/material';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import ExpenseSummary from '../components/ExpenseSummary';
import Service from '../components/Service';
import Banner from '../components/Banner';

const LandingPage: React.FC = () => {
    return (
        <Container className='min-h-screen' sx={{ mt: 11, mb: 8 }}>
            <Typography variant="h4" gutterBottom align="center">
                Personal Expense Tracker
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mb: 4,
                }}
            >
                <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: '600px' }}>
                    <ExpenseForm />
                </Paper>
            </Box>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>
                            Expense List
                        </Typography>
                        <ExpenseList />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>
                            Expense Summary
                        </Typography>
                        <ExpenseSummary />
                    </Paper>
                </Grid>
            </Grid>
            <Box sx={{ my: 5 }}>
                <Banner></Banner>
            </Box>
            <Box>
                <Service></Service>
            </Box>
        </Container>
    );
}

export default LandingPage;
