import React from 'react';
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import banner from '../Assets/150-expense-categories.jpg'



const BannerImage = styled('img')({
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
});

const Banner: React.FC = () => {
    return (
        <Box component={Paper} sx={{ boxShadow: 3, p: { xs: 2, md: 10 } }}>
            <Container>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Welcome to Your Personal Expense Tracker
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Manage your finances effortlessly with our easy-to-use expense tracker. Track your spending, set budgets, and analyze your financial habits with detailed reports.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <BannerImage src={banner} alt="Expense Tracker" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;
