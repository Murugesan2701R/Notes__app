// // // import React, { useState, useEffect } from 'react';
// // // import { Card, CardContent, Typography, Grid, createTheme, ThemeProvider } from '@mui/material';
// // // import { makeStyles } from '@mui/styles';
// // // import axios from 'axios';
// // // import DeleteIcon from '@mui/icons-material/Delete';

// // // const theme = createTheme();

// // // function getRandomColor() {
// // //     const letters = '0123456789ABCDEF';
// // //     let color = '#';
// // //     for (let i = 0; i < 6; i++) {
// // //         color += letters[Math.floor(Math.random() * 16)];
// // //     }
// // //     return color;
// // // }

// // // const useStyles = makeStyles(() => ({
// // //     card: {
// // //         padding: theme.spacing(2),
// // //         color: 'white',
// // //     },
// // // }));

// // // const Cards = () => {
// // //     const classes = useStyles();
// // //     const [arr, setArr] = useState([]);

// // //     useEffect(() => {
// // //         axios.get('https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes')
// // //             .then((response) => {
// // //                 setArr(response.data);
// // //             })
// // //             .catch((error) => {
// // //                 console.error('Error fetching data:', error);
// // //             });
// // //     }, []);

// // //     return (
// // //         <ThemeProvider theme={theme}>
// // //             <Grid container spacing={2}>
// // //                 {arr.map((item, index) => (
// // //                     <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
// // //                         <Card className={classes.card} style={{ backgroundColor: getRandomColor() }}>
// // //                             <CardContent>
// // //                                 <Typography variant="h6" component="div">
// // //                                     {item.title}
// // //                                 </Typography>
// // //                             </CardContent>
// // //                         </Card>
// // //                     </Grid>
// // //                 ))}
// // //             </Grid>
// // //         </ThemeProvider>
// // //     );
// // // };

// // // export default Cards;

// // import React, { useState, useEffect } from 'react';
// // import { Card, CardContent, Typography, Grid, createTheme, ThemeProvider, IconButton } from '@mui/material';
// // import { makeStyles } from '@mui/styles';
// // import axios from 'axios';
// // import DeleteIcon from '@mui/icons-material/Delete';

// // const theme = createTheme();

// // function getRandomColor() {
// //     const letters = '0123456789ABCDEF';
// //     let color = '#';
// //     for (let i = 0; i < 6; i++) {
// //         color += letters[Math.floor(Math.random() * 16)];
// //     }
// //     return color;
// // }

// // const useStyles = makeStyles(() => ({
// //     card: {
// //         padding: theme.spacing(2),
// //         color: 'white',
// //         position: 'relative', // Add relative positioning to the card
// //     },
// //     deleteButton: {
// //         color: 'red', // Customize the delete button's color
// //         position: 'absolute',
// //         top: '50%',
// //         left: '50%',
// //         transform: 'translate(-50%, -50%)', // Center the delete icon
// //         zIndex: 1, // Ensure the delete icon appears above the card content
// //     },
// // }));

// // const Cards = () => {
// //     const classes = useStyles();
// //     const [arr, setArr] = useState([]);
// //     const [showDeleteIcon, setShowDeleteIcon] = useState(false); // State to control delete icon visibility

// //     useEffect(() => {
// //         axios.get('https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes')
// //             .then((response) => {
// //                 setArr(response.data);
// //             })
// //             .catch((error) => {
// //                 console.error('Error fetching data:', error);
// //             });
// //     }, []);

// //     const handleDelete = (id) => {
// //         // Implement the delete logic here, e.g., send a DELETE request to your API
// //         // Update the arr state after successful deletion
// //         axios.delete(`https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes/${id}`)
// //             .then(() => {
// //                 const updatedArr = arr.filter(item => item.id !== id);
// //                 setArr(updatedArr);
// //                 setShowDeleteIcon(false); // Hide delete icon after deletion
// //             })
// //             .catch((error) => {
// //                 console.error('Error deleting data:', error);
// //             });
// //     };

// //     return (
// //         <ThemeProvider theme={theme}>
// //             <Grid container spacing={2}>
// //                 {arr.map((item) => (
// //                     <Grid item xs={12} sm={12} md={12} lg={12} key={item.id}>
// //                         <Card
// //                             className={classes.card}
// //                             style={{ backgroundColor: getRandomColor() }}
// //                             onDoubleClick={() => setShowDeleteIcon(true)} // Show delete icon on double-click
// //                         >
// //                             <CardContent>
// //                                 <Typography variant="h6" component="div">
// //                                     {item.title}
// //                                 </Typography>
// //                                 {showDeleteIcon && ( // Conditionally render delete icon
// //                                     <IconButton
// //                                         className={classes.deleteButton}
// //                                         onClick={() => handleDelete(item.id)}
// //                                     >
// //                                         <DeleteIcon />
// //                                     </IconButton>
// //                                 )}
// //                             </CardContent>
// //                         </Card>
// //                     </Grid>
// //                 ))}
// //             </Grid>
// //         </ThemeProvider>
// //     );
// // };

// // export default Cards;

// import React, { useState, useEffect } from 'react';
// import {
//     Card,
//     CardContent,
//     Typography,
//     Grid,
//     createTheme,
//     ThemeProvider,
//     IconButton,
// } from '@mui/material';
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
//         position: 'relative',
//     },
//     deleteButton: {
//         color: 'red',
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         zIndex: 1,
//     },
// }));

// const Cards = () => {
//     const classes = useStyles();
//     const [arr, setArr] = useState([]);

//     useEffect(() => {
//         axios
//             .get('https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes')
//             .then((response) => {
//                 setArr(response.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         // Implement the delete logic here, e.g., send a DELETE request to your API
//         // Update the arr state after successful deletion
//         axios
//             .delete(`https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes/${id}`)
//             .then(() => {
//                 const updatedArr = arr.filter((item) => item.id !== id);
//                 setArr(updatedArr);
//             })
//             .catch((error) => {
//                 console.error('Error deleting data:', error);
//             });
//     };

//     const toggleDeleteIcon = (id) => {
//         // This function toggles the delete icon for the clicked card
//         const updatedArr = arr.map((item) =>
//             item.id === id ? { ...item, showDeleteIcon: !item.showDeleteIcon } : item
//         );
//         setArr(updatedArr);
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <Grid container spacing={2}>
//                 {arr.map((item) => (
//                     <Grid item xs={12} sm={12} md={12} lg={12} key={item.id}>
//                         <Card
//                             className={classes.card}
//                             style={{ backgroundColor: getRandomColor() }}
//                             onClick={() => toggleDeleteIcon(item.id)}
//                         >
//                             <CardContent>
//                                 <Typography variant="h6" component="div">
//                                     {item.title}
//                                 </Typography>
//                                 {item.showDeleteIcon && (
//                                     <IconButton
//                                         className={classes.deleteButton}
//                                         onClick={() => handleDelete(item.id)}
//                                     >
//                                         <DeleteIcon />
//                                     </IconButton>
//                                 )}
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </ThemeProvider>
//     );
// };

// export default Cards;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import {
//     Card,
//     CardContent,
//     Typography,
//     Grid,
//     createTheme,
//     ThemeProvider,
//     IconButton,
// } from '@mui/material';
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
//         position: 'relative',
//     },
//     deleteButton: {
//         color: 'red',
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         zIndex: 1,
//     },
// }));

// const Cards = () => {
//     const classes = useStyles();
//     const [arr, setArr] = useState([]);
//     const navigate = useNavigate(); // Access the navigate function

//     useEffect(() => {
//         axios
//             .get('https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes')
//             .then((response) => {
//                 setArr(
//                     response.data.map((item) => ({
//                         ...item,
//                         showDeleteIcon: false,
//                         editable: false, // Add editable property to each note
//                     }))
//                 );
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     const handleDelete = (id) => {
//         // Implement the delete logic here, e.g., send a DELETE request to your API
//         // Update the arr state after successful deletion
//         axios
//             .delete(`https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes/${id}`)
//             .then(() => {
//                 const updatedArr = arr.filter((item) => item.id !== id);
//                 setArr(updatedArr);
//             })
//             .catch((error) => {
//                 console.error('Error deleting data:', error);
//             });
//     };

//     const toggleDeleteIcon = (id) => {
//         // This function toggles the delete icon for the clicked card
//         const updatedArr = arr.map((item) =>
//             item.id === id ? { ...item, showDeleteIcon: !item.showDeleteIcon } : item
//         );
//         setArr(updatedArr);
//     };

//     const handleCardDoubleClick = (id) => {
//         // Redirect to the note creation page with the note's id and set it as editable
//         navigate(`/note-creation/${id}?editable=true`);
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <Grid container spacing={2}>
//                 {arr.map((item) => (
//                     <Grid item xs={12} sm={12} md={12} lg={12} key={item.id}>
//                         <Card
//                             className={classes.card}
//                             style={{ backgroundColor: getRandomColor() }}
//                             onDoubleClick={() => handleCardDoubleClick(item.id)} // Handle double-click
//                         >
//                             <CardContent>
//                                 <Typography variant="h6" component="div">
//                                     {item.title}
//                                 </Typography>
//                                 {item.showDeleteIcon && (
//                                     <IconButton
//                                         className={classes.deleteButton}
//                                         onClick={() => handleDelete(item.id)}
//                                     >
//                                         <DeleteIcon />
//                                     </IconButton>
//                                 )}
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </ThemeProvider>
//     );
// };

// export default Cards;


// import React, { useState, useEffect } from 'react';
// import {
//     Card,
//     CardContent,
//     Typography,
//     Grid,
//     createTheme,
//     ThemeProvider,
//     IconButton,
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import axios from 'axios';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useNavigate } from 'react-router-dom';

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
//         position: 'relative',
//     },
//     deleteButton: {
//         color: 'red',
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         zIndex: 1,
//     },
// }));

// const Cards = () => {
//     const classes = useStyles();
//     const [arr, setArr] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios
//             .get('https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes')
//             .then((response) => {
//                 setArr(
//                     response.data.map((item) => ({
//                         ...item,
//                         showDeleteIcon: false,
//                         editable: false,
//                     }))
//                 );
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     const handleDeleteClick = (id) => {
//         const updatedArr = arr.map((item) =>
//             item.id === id
//                 ? { ...item, showDeleteIcon: !item.showDeleteIcon }
//                 : item
//         );
//         setArr(updatedArr);
//     };

//     const handleDelete = (id) => {
//         // Send a DELETE request to the API to delete the item
//         axios
//             .delete(`https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes/${id}`)
//             .then(() => {
//                 // Update the arr state after successful deletion
//                 const updatedArr = arr.filter((item) => item.id !== id);
//                 setArr(updatedArr);
//             })
//             .catch((error) => {
//                 console.error('Error deleting data:', error);
//             });
//     };

//     const handleCardDoubleClick = (id) => {
//         navigate(`/note-creation/${id}?editable=true`);
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <Grid container spacing={2}>
//                 {arr.map((item) => (
//                     <Grid item xs={12} sm={12} md={12} lg={12} key={item.id}>
//                         <Card
//                             className={classes.card}
//                             style={{ backgroundColor: getRandomColor() }}
//                             onClick={() => handleDeleteClick(item.id)}
//                             onDoubleClick={() => handleCardDoubleClick(item.id)}
//                         >
//                             <CardContent>
//                                 <Typography variant="h6" component="div">
//                                     {item.title}
//                                 </Typography>
//                                 {item.showDeleteIcon && (
//                                     <IconButton
//                                         className={classes.deleteButton}
//                                         onClick={() => handleDelete(item.id)}
//                                     >
//                                         <DeleteIcon />
//                                     </IconButton>
//                                 )}
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </ThemeProvider>
//     );
// };

// export default Cards;



// import React, { useState, useEffect } from 'react';
// import {
//     Card,
//     CardContent,
//     Typography,
//     Grid,
//     createTheme,
//     ThemeProvider,
//     IconButton,
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import axios from 'axios';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useNavigate } from 'react-router-dom';

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
//         position: 'relative',
//     },
//     deleteButton: {
//         color: 'red',
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         zIndex: 1,
//     },
// }));


// const Cards = ({ cards }) => {
//     const classes = useStyles();
//     const [searchTerm, setSearchTerm] = useState('');
//     const [arr, setArr] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios
//             .get('https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes')
//             .then((response) => {
//                 setArr(
//                     response.data.map((item) => ({
//                         ...item,
//                         showDeleteIcon: false,
//                         editable: false,
//                     }))
//                 );
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     const handleDeleteClick = (id) => {
//         const updatedArr = arr.map((item) =>
//             item.id === id
//                 ? { ...item, showDeleteIcon: !item.showDeleteIcon }
//                 : item
//         );
//         setArr(updatedArr);
//     };

//     const handleDelete = (id) => {
//         // Send a DELETE request to the API to delete the item
//         axios
//             .delete(`https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes/${id}`)
//             .then(() => {
//                 // Update the arr state after successful deletion
//                 const updatedArr = arr.filter((item) => item.id !== id);
//                 setArr(updatedArr);
//             })
//             .catch((error) => {
//                 console.error('Error deleting data:', error);
//             });
//     };

//     const handleCardDoubleClick = (id) => {
//         navigate(`/note-creation/${id}?editable=true`);
//     };

//     const filteredCards = cards.filter((card) =>
//         card.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <ThemeProvider theme={theme}>
//             <Grid container spacing={2}>
//                 {arr.map((item) => (
//                     <Grid item xs={12} sm={12} md={12} lg={12} key={item.id}>
//                         <Card
//                             className={classes.card}
//                             style={{ backgroundColor: getRandomColor() }}
//                             onClick={() => handleDeleteClick(item.id)}
//                             onDoubleClick={() => handleCardDoubleClick(item.id)}
//                         >
//                             <CardContent>
//                                 <Typography variant="h6" component="div">
//                                     {item.title}
//                                 </Typography>
//                                 {item.showDeleteIcon && (
//                                     <IconButton
//                                         className={classes.deleteButton}
//                                         onClick={() => handleDelete(item.id)}
//                                     >
//                                         <DeleteIcon />
//                                     </IconButton>
//                                 )}
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
        // Send a DELETE request to the API to delete the item
        axios
            .delete(`https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes/${id}`)
            .then(() => {
                // Update the arr state after successful deletion
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