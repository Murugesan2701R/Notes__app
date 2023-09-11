// import React, { useState } from 'react';
// import {
//     AppBar,
//     Toolbar,
//     InputBase,
//     CssBaseline,
//     createTheme,
//     ThemeProvider,
//     Typography,
//     Box,
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import centerImage from './images/File searching-cuate.png';

// const theme = createTheme({
//     palette: {
//         mode: 'dark',
//     },
// });

// const SearchPage = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResult, setSearchResult] = useState(null);

//     const handleSearch = () => {
//         // Replace this with your actual search logic
//         // For demonstration, we'll toggle the search result based on a hardcoded term.
//         if (searchTerm === 'yourSearchTerm') {
//             setSearchResult(true); // Search found
//         } else {
//             setSearchResult(false); // Search not found
//         }
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <AppBar position="static">
//                 <Toolbar>
//                     <InputBase
//                         placeholder="Search..."
//                         sx={{ color: 'white' }}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         onKeyPress={(e) => {
//                             if (e.key === 'Enter') {
//                                 handleSearch();
//                             }
//                         }}
//                     />
//                 </Toolbar>
//             </AppBar>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     minHeight: 'calc(100vh - 64px)', // Adjust for AppBar height
//                     color: 'white',
//                 }}
//             >
//                 {searchResult === true ? (
//                     <Typography variant="body1">Search Found</Typography>
//                 ) : searchResult === false ? (
//                     <>
//                         <img
//                             src={centerImage}
//                             alt="File Not Found"
//                             style={{
//                                 maxWidth: '100%',
//                                 height: 'auto',
//                                 width: '80%',
//                             }}
//                         />
//                         <Typography variant="body1">File Not Found</Typography>
//                     </>
//                 ) : null}
//             </Box>
//         </ThemeProvider>
//     );
// };

// export default SearchPage;

import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    InputBase,
    CssBaseline,
    createTheme,
    ThemeProvider,
    Typography,
    Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import centerImage from './images/File searching-cuate.png';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const SearchPage = () => {
    // const [searchTerm, setSearchTerm] = useState('');
    // const [searchResult, setSearchResult] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const homepageContent = `
        This is some sample content on the homepage.
        You can replace this with your actual content.
    `;

    const handleSearch = () => {
        // Replace this with your actual search logic
        // For demonstration, we'll toggle the search result based on a hardcoded term.
        if (searchTerm === 'yourSearchTerm') {
            setSearchResult(true); // Search found
        } else {
            setSearchResult(false); // Search not found
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <InputBase
                        placeholder="Search..."
                        sx={{ color: 'white' }}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 'calc(100vh - 64px)', // Adjust for AppBar height
                    color: 'white',
                }}
            >
                {searchResult === true ? (
                    <Typography variant="body1">Search Found</Typography>
                ) : searchResult === false ? (
                    <>
                        <img
                            src={centerImage}
                            alt="File Not Found"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                width: '80%',
                                marginBottom: '20px', // Add margin to adjust the gap
                            }}
                        />
                        <Typography variant="body1">File Not Found</Typography>
                    </>
                ) : null}

                {/* Check for homepage content and render it if found */}
                {searchResult === true && homepageContent && (
                    <Typography variant="body1">{homepageContent}</Typography>
                )}
            </Box>
        </ThemeProvider>
    );
};

export default SearchPage;
