import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import t1 from '../Assets/t1.jpg';
import t2 from '../Assets/t2.jpeg';
import t3 from '../Assets/t3.png';

const services = [
    {
        title: 'Track Your Expenses',
        description: 'Easily keep track of your daily expenses with a simple and intuitive interface. Categorize and view your spending effortlessly.',
        image: t1,
    },
    {
        title: 'Set Budgets',
        description: 'Set and manage budgets for different categories to ensure you stay within your financial limits.',
        image: t2,
    },
    {
        title: 'Generate Reports',
        description: 'Generate detailed reports and summaries of your spending to analyze your financial habits and make informed decisions.',
        image: t3,
    },
];

const Service: React.FC = () => {
    return (
        <Container sx={{ mb: 5 }}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom align="center">
                        Our Services
                    </Typography>
                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <Card sx={{ height: 360 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={service.image}
                                        alt={service.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
        </Container>
    );
};

export default Service;
