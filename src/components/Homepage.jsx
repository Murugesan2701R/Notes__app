import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    createTheme,
    ThemeProvider,
    CssBaseline,
    Box,
    Fab,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import AddIcon from '@mui/icons-material/Add';
import centerImage from './images/Notebook-rafiki (2).png';
import Cards from './Cards';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';




const Homepage = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [cardData, setCardData] = useState([]);
    const [arr, setArr] = useState([]);
    const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);


    useEffect(() => {

        axios.get('https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes')
            .then((response) => {
                console.log(response.data.length)
                setArr(response.data.length > 0 ? true : false)
                console.log(arr)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);





    const lightTheme = createTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
            background: {
                default: '#ffffff',
            },
            text: {
                primary: 'black',
            },
        },
    });

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
            background: {
                default: 'rgba(37, 37, 37, 1)',
            },
            mode: 'dark',
            text: {
                primary: 'white',
            },
        },
    });


    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
    const navigate = useNavigate()

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        navigate('/search')
    };

    const openInfoDialog = () => {
        setIsInfoDialogOpen(true);
    };

    const closeInfoDialog = () => {
        setIsInfoDialogOpen(false);
    };


    if (arr) {
        return (
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <CssBaseline />
                <Box
                    sx={{
                        backgroundColor: isDarkMode ? 'rgba(37, 37, 37, 1)' : '#ffffff',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <AppBar position="static">
                        <Toolbar
                            sx={{
                                backgroundColor: isDarkMode ? 'rgba(37, 37, 37, 1)' : 'white',
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    color: isDarkMode ? 'white' : 'rgba(37, 37, 37, 1)',
                                    textAlign: 'left',
                                }}
                            >
                                Notes
                            </Typography>
                            <IconButton onClick={toggleSearch} color={isDarkMode ? 'default' : 'inherit'}>
                                <SearchIcon />
                            </IconButton>

                            <IconButton color={isDarkMode ? 'default' : 'inherit'} onClick={openInfoDialog}>
                                <InfoIcon />
                            </IconButton>

                            <IconButton color={isDarkMode ? 'default' : 'inherit'} onClick={toggleDarkMode}>
                                {isDarkMode ? (
                                    <Brightness7Icon style={{ color: 'white' }} />
                                ) : (
                                    <Brightness4Icon style={{ color: 'rgba(37, 37, 37, 1)' }} />
                                )}
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Cards cardData={cardData} />
                    <Link to="/create-note">
                        <Fab
                            color="primary"
                            aria-label="Add"
                            sx={{
                                position: 'fixed',
                                bottom: '16px',
                                right: '16px',
                                backgroundColor: isDarkMode ? 'rgba(37, 37, 37, 1)' : 'rgba(37, 37, 37, 1)',
                                color: 'white',
                                borderRadius: '50%',
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                                '&:hover': {
                                    backgroundColor: isDarkMode ? 'rgba(37, 37, 37, 1)' : 'grey',
                                },
                            }}
                        >
                            <AddIcon />
                        </Fab>
                    </Link>
                    <Dialog open={isInfoDialogOpen}
                        onClose={closeInfoDialog}
                        PaperProps={{
                            style: {
                                width: '330px',
                                height: '236px',
                                borderRadius: '20px',
                            },
                        }}>
                        <DialogContent>
                            <DialogContentText>
                                Designed by -
                            </DialogContentText>
                            <DialogContentText>
                                Redesigned by -
                            </DialogContentText>
                            <DialogContentText>
                                Illustrations -
                            </DialogContentText>
                            <DialogContentText>
                                Icons -
                            </DialogContentText>
                            <DialogContentText>
                                Font -
                            </DialogContentText>
                            <DialogContentText style={{
                                textAlign: 'center',
                                marginTop: '16px',
                                fontStyle: 'italic',
                                color: '#888',
                            }}>
                                Made By
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>

                </Box>
            </ThemeProvider >
        );
    }

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Box
                sx={{
                    backgroundColor: isDarkMode ? 'rgba(37, 37, 37, 1)' : '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <AppBar position="static">
                    <Toolbar
                        sx={{
                            backgroundColor: isDarkMode ? 'rgba(37, 37, 37, 1)' : 'white',
                        }}
                    >
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                color: isDarkMode ? 'white' : 'rgba(37, 37, 37, 1)',
                                textAlign: 'left',
                            }}
                        >
                            Notes
                        </Typography>
                        <IconButton onClick={toggleSearch} color={isDarkMode ? 'default' : 'inherit'}>
                            <SearchIcon />
                        </IconButton>

                        <IconButton color={isDarkMode ? 'default' : 'inherit'} onClick={openInfoDialog}>
                            <InfoIcon />
                        </IconButton>

                        <IconButton color={isDarkMode ? 'default' : 'inherit'} onClick={toggleDarkMode}>
                            {isDarkMode ? (
                                <Brightness7Icon style={{ color: 'white' }} />
                            ) : (
                                <Brightness4Icon style={{ color: 'rgba(37, 37, 37, 1)' }} />
                            )}
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                    }}
                >
                    <img
                        src={centerImage}
                        alt="Centered Image"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            width: '80%',
                        }}
                    />
                    <p>Create a first one!</p>
                </div>
                <Link to="/create-note">
                    <Fab
                        color="primary"
                        aria-label="Add"
                        sx={{
                            position: 'fixed',
                            bottom: '16px',
                            right: '16px',
                            backgroundColor: isDarkMode ? 'rgba(37, 37, 37, 1)' : 'rgba(37, 37, 37, 1)',
                            color: 'white',
                            borderRadius: '50%',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
                            '&:hover': {
                                backgroundColor: isDarkMode ? 'rgba(37, 37, 37, 1)' : 'grey',
                            },
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </Link>
                <Dialog
                    open={isInfoDialogOpen}
                    onClose={closeInfoDialog}
                    PaperProps={{
                        style: {
                            width: '330px',
                            height: '236px',
                            borderRadius: '20px',
                        },
                    }}>
                    <DialogContent>
                        <DialogContentText>
                            Designed by -
                        </DialogContentText>
                        <DialogContentText>
                            Redesigned by -
                        </DialogContentText>
                        <DialogContentText>
                            Illustrations -
                        </DialogContentText>
                        <DialogContentText>
                            Icons -
                        </DialogContentText>
                        <DialogContentText>
                            Font -
                        </DialogContentText>
                        <DialogContentText style={{
                            textAlign: 'center',
                            marginTop: '16px',
                            fontStyle: 'italic',
                            color: '#888',
                        }}>
                            Made By
                        </DialogContentText>
                    </DialogContent>
                </Dialog>

            </Box>
        </ThemeProvider >
    );
}
export default Homepage;