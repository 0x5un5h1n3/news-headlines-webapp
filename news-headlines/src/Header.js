import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#333', color: '#fff' }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    News Headlines
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
