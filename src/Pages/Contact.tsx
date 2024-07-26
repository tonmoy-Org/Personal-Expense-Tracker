import React from 'react';
import { Container, Grid, Typography, Paper, Box, Link } from '@mui/material';

const Contact: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 11, mb: 8 }}>
            <Typography variant="h4" gutterBottom align="center">
                Contact Us
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Contact Information
                        </Typography>
                        <Typography paragraph>
                            If you have any questions or need assistance, feel free to reach out to us through the following methods:
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong>Email:</strong> <Link href="mailto:support@example.com">support@example.com</Link>
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong>Phone:</strong> (123) 456-7890
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            <strong>Address:</strong> 123 Main Street, Anytown, USA
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h6" gutterBottom>
                            Our Location
                        </Typography>
                        <Box
                            sx={{
                                height: '400px',
                                width: '100%',
                                overflow: 'hidden',
                                borderRadius: 1,
                            }}
                        >
                            <iframe
                                title="Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.425517622806!2d-74.00601508459231!3d40.71277577933199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a0e4b730897%3A0x8e5c6b6e9d7c86d!2sNew%20York%2C%20NY%2010017%2C%20USA!5e0!3m2!1sen!2sin!4v1629217879522!5m2!1sen!2sin"
                                style={{ border: 0, height: '100%', width: '100%' }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
