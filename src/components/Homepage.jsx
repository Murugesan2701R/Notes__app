import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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


const Homepage = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false);



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

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };


    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Box
                sx={{
                    backgroundColor: isDarkMode ? 'rgba(37, 37, 37, 1)' : '#ffffff',
                    minHeight: '100vh',
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

                        <IconButton color={isDarkMode ? 'default' : 'inherit'}>
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
            </Box>
        </ThemeProvider>
    );
};

export default Homepage;
