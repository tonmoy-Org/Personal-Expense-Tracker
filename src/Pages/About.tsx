import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const About: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 11, mb: 8 }}>
            <Typography variant="h4" gutterBottom align="center">
                About Personal Expense Tracker
            </Typography>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Introduction
                </Typography>
                <Typography paragraph>
                    The Personal Expense Tracker is a web application designed to help you manage and track your daily expenses with ease. Whether you want to monitor your spending habits or keep track of your budget, this tool provides a user-friendly interface to manage your finances efficiently.
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Features
                </Typography>
                <Typography paragraph>
                    <ul>
                        <li><strong>Add Expense:</strong> Users can add expenses with details such as amount, category, and date.</li>
                        <li><strong>View Expenses:</strong> Users can view a list of all added expenses.</li>
                        <li><strong>Filter Expenses:</strong> Users can filter expenses by date or category to view specific entries.</li>
                        <li><strong>Edit and Delete Expenses:</strong> Users can modify or remove existing expenses as needed.</li>
                        <li><strong>Expense Summary:</strong> Users can view a summary of their expenses, including total spending and spending by category.</li>
                    </ul>
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Getting Started
                </Typography>
                <Typography paragraph>
                    To get started, simply add your expenses using the form on the home page. You can then view and manage your expenses in the lists and summaries provided. The application aims to provide a straightforward and effective way to keep your finances organized.
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Contact
                </Typography>
                <Typography paragraph>
                    If you have any questions or feedback, feel free to reach out to us at <a href="mailto:support@example.com">support@example.com</a>.
                </Typography>
            </Paper>
        </Container>
    );
};

export default About;
