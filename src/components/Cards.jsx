// import React, { useState, useEffect } from 'react';
// import { Card, CardContent, Typography, Grid, createTheme, ThemeProvider } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import axios from 'axios';
// import DeleteIcon from '@mui/icons-material/Delete';

// const theme = createTheme();

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// const useStyles = makeStyles(() => ({
//     card: {
//         padding: theme.spacing(2),
//         color: 'white',
//     },
// }));

// const Cards = () => {
//     const classes = useStyles();
//     const [arr, setArr] = useState([]);

//     useEffect(() => {
//         axios.get('https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes')
//             .then((response) => {
//                 setArr(response.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     return (
//         <ThemeProvider theme={theme}>
//             <Grid container spacing={2}>
//                 {arr.map((item, index) => (
//                     <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
//                         <Card className={classes.card} style={{ backgroundColor: getRandomColor() }}>
//                             <CardContent>
//                                 <Typography variant="h6" component="div">
//                                     {item.title}
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </ThemeProvider>
//     );
// };

// export default Cards;

import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, createTheme, ThemeProvider, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

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
        position: 'relative', // Add relative positioning to the card
    },
    deleteButton: {
        color: 'red', // Customize the delete button's color
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Center the delete icon
        zIndex: 1, // Ensure the delete icon appears above the card content
    },
}));

const Cards = () => {
    const classes = useStyles();
    const [arr, setArr] = useState([]);
    const [showDeleteIcon, setShowDeleteIcon] = useState(false); // State to control delete icon visibility

    useEffect(() => {
        axios.get('https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes')
            .then((response) => {
                setArr(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleDelete = (id) => {
        // Implement the delete logic here, e.g., send a DELETE request to your API
        // Update the arr state after successful deletion
        axios.delete(`https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes/${id}`)
            .then(() => {
                const updatedArr = arr.filter(item => item.id !== id);
                setArr(updatedArr);
                setShowDeleteIcon(false); // Hide delete icon after deletion
            })
            .catch((error) => {
                console.error('Error deleting data:', error);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
                {arr.map((item) => (
                    <Grid item xs={12} sm={12} md={12} lg={12} key={item.id}>
                        <Card
                            className={classes.card}
                            style={{ backgroundColor: getRandomColor() }}
                            onDoubleClick={() => setShowDeleteIcon(true)} // Show delete icon on double-click
                        >
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {item.title}
                                </Typography>
                                {showDeleteIcon && ( // Conditionally render delete icon
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

