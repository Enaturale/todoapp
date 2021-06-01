import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';


const Header =  () => {
    return(
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant = "h4" >Task Manager</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;