import React, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    createTheme,
    ThemeProvider,
    IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

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
        position: 'relative',
    },
    deleteButton: {
        color: 'red',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
    },
}));

const Cards = () => {
    const classes = useStyles();
    const [arr, setArr] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes')
            .then((response) => {
                setArr(
                    response.data.map((item) => ({
                        ...item,
                        showDeleteIcon: false,
                        editable: false,
                    }))
                );
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleDeleteClick = (id) => {
        const updatedArr = arr.map((item) =>
            item.id === id
                ? { ...item, showDeleteIcon: !item.showDeleteIcon }
                : item
        );
        setArr(updatedArr);
    };

    const handleDelete = (id) => {
        axios
            .delete(`https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes/${id}`)
            .then(() => {
                const updatedArr = arr.filter((item) => item.id !== id);
                setArr(updatedArr);
            })
            .catch((error) => {
                console.error('Error deleting data:', error);
            });
    };

    const handleCardDoubleClick = (id) => {
        navigate(`/note-creation/${id}?editable=true`);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
                {arr.map((item) => (
                    <Grid item xs={12} sm={12} md={12} lg={12} key={item.id}>
                        <Card
                            className={classes.card}
                            style={{ backgroundColor: getRandomColor() }}
                            onClick={() => handleDeleteClick(item.id)}
                            onDoubleClick={() => handleCardDoubleClick(item.id)}
                        >
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {item.title}
                                </Typography>
                                {item.showDeleteIcon && (
                                    <IconButton
                                        className={classes.deleteButton}
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </ThemeProvider>
    );
};

export default Cards;