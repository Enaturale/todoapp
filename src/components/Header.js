import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';


const Header =  () => {
    return(
        <div style ={{align:'center'}}>
            <AppBar>
                <Toolbar>
                    <Typography variant = "h4" >Task Manager</Typography>
                </Toolbar>

            </AppBar>

            {/* <h4 style ={{margin: '0px', padding: '0'}}>  */}
                {/* Task Manager
            </h4> */}
        </div>
    )
}

export default Header;