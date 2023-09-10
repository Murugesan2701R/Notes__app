import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    createTheme,
    ThemeProvider,
    CssBaseline,
    AppBar,
    Toolbar,
    IconButton,
    TextField,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SaveIcon from '@mui/icons-material/Save';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NoteCreationPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isSavePopupOpen, setIsSavePopupOpen] = useState(false);
    const [isDiscardPopupOpen, setIsDiscardPopupOpen] = useState(false);
    const [noteData, setNoteData] = useState({ title: '', content: '' });
    const [isEditable, setIsEditable] = useState(true);


    const navigate = useNavigate();
    const lightTheme = createTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
            background: {
                default: '#ffffff',
            },
            text: {
                primary: '#000',
            },
        },
        components: {
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: '#000',
                    },
                },
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
                primary: '#fff',
            },
        },
        components: {
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: '#fff',
                    },
                },
            },
        },
    });
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const handleSaveClick = () => {
        setIsSavePopupOpen(true);
    };

    const handleSavePopupClose = () => {
        setIsDiscardPopupOpen(false);
    };


    const handleSaveChanges = () => {
        const newNote = {
            title: noteData.title,
            content: noteData.content,
        };
        axios
            .post("https://64fa08ce4098a7f2fc154e5b.mockapi.io/Notes", newNote)
            .then((response) => {
                if (response.status === 201) {
                    console.log("Note saved successfully!");
                    navigate('/homepage');
                } else {
                    console.error("Failed to save the note.");
                }
            })
            .catch((error) => {
                console.error("An error occurred while saving the note:", error);
            });

        setIsSavePopupOpen(false);
    };

    const handleDiscard = () => {
        setIsDiscardPopupOpen(true);
    };


    const handleKeep = () => {
        setIsDiscardPopupOpen(false);
    };
    const handleViewClick = () => {
        setIsEditable((prevIsEditable) => !prevIsEditable);
    };
    const handleDiscardPopupClose = () => {
        setIsDiscardPopupOpen(false);
    };

    const handleDiscardConfirmed = () => {
        setIsDiscardPopupOpen(false);
        navigate('/homepage');
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <div>
                <AppBar position="static">
                    <Toolbar
                        sx={{
                            backgroundColor: isDarkMode ? 'rgba(37, 37, 37, 1)' : 'white',
                        }}>
                        <IconButton edge="start" color="inherit" aria-label="back" onClick={handleDiscard}>
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                        <div style={{ flexGrow: 1 }} />
                        <IconButton color="inherit" aria-label="view" onClick={handleViewClick}>
                            <VisibilityIcon />
                        </IconButton>

                        <IconButton color="inherit" aria-label="save" onClick={handleSaveClick}>
                            <SaveIcon />
                        </IconButton>
                        <IconButton
                            color={isDarkMode ? 'default' : 'inherit'}
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode ? (
                                <Brightness7Icon style={{ color: 'white' }} />
                            ) : (
                                <Brightness4Icon style={{ color: 'rgba(37, 37, 37, 1)' }} />
                            )}
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Dialog open={isSavePopupOpen} onClose={handleSavePopupClose}>
                    <DialogContent>
                        <Box textAlign="center" mb={2}>
                            <InfoIcon color={isDarkMode ? 'white' : 'info'} fontSize="large" />
                        </Box>
                        <Typography variant="h6" align="center" gutterBottom>
                            Save Changes?
                        </Typography>
                        <Box display="flex" justifyContent="center">
                            <Button onClick={handleSavePopupClose} style={{ backgroundColor: 'red', color: 'white', margin: '0 8px' }}>
                                Discard
                            </Button>



                            <Button onClick={handleSaveChanges} style={{ backgroundColor: 'green', color: 'white', margin: '0 8px' }}>

                            </Button>

                        </Box>
                    </DialogContent>
                </Dialog>

                <Box >
                    <TextField
                        placeholder="Title"
                        fullWidth
                        value={noteData.title}
                        onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
                        style={{ border: 'none', padding: 0 }}
                        disabled={!isEditable}
                    />
                    <Dialog open={isDiscardPopupOpen} onClose={handleSavePopupClose}>
                        <DialogContent>
                            <Box textAlign="center" mb={2}>
                                <InfoIcon color="info" fontSize="large" />
                            </Box>
                            <Typography variant="h6" align="center" gutterBottom>
                                Are you sure you want to discard your changes?
                            </Typography>
                            <Box display="flex" justifyContent="center">
                                <Button
                                    onClick={handleDiscardConfirmed}
                                    style={{ backgroundColor: 'red', color: 'white', margin: '0 8px' }}
                                >
                                    Discard
                                </Button>
                                <Button onClick={handleKeep}
                                    style={{ backgroundColor: 'green', color: 'white', margin: '0 8px' }}
                                >
                                    Keep
                                </Button>
                            </Box>
                        </DialogContent>
                    </Dialog>

                </Box>
                <Box >
                    <TextField
                        placeholder="Type something..."
                        fullWidth
                        multiline
                        rows={30}
                        value={noteData.content}
                        onChange={(e) => setNoteData({ ...noteData, content: e.target.value })}
                        style={{ border: 'none', padding: 0 }}
                        disabled={!isEditable}
                    />

                </Box>
            </div>
        </ThemeProvider>
    );
};

export default NoteCreationPage

