import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
                textAlign: 'center',
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="body1">
                    Personal Expense Tracker © {new Date().getFullYear()}
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Link to='/privacyPolicy' color="inherit">
                        Privacy Policy
                    </Link>
                    {' | '}
                    <Link  to='/termsOfService' color="inherit">
                        Terms of Service
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
