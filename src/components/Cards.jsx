import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, createTheme, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const theme = createTheme();

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const useStyles = makeStyles(() => ({
    card: {
        padding: theme.spacing(2),
        color: 'white',
    },
}));

const Cards = () => {
    const classes = useStyles();
    const [arr, setArr] = useState([]);

    useEffect(() => {
        axios.get('https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes')
            .then((response) => {
                setArr(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
                {arr.map((item, index) => (
                    <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                        <Card className={classes.card} style={{ backgroundColor: getRandomColor() }}>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </ThemeProvider>
    );
};

export default Cards;

