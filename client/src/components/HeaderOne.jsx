import React from 'react';
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Facebook
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header