
import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';

import IconButton from '@material-ui/core/IconButton'

import MenuIcon from '@material-ui/icons/Menu'

import { withStyles } from '@material-ui/core/styles'

const MainAppBar = (props)=>{

    const {isDrawerOpen, handleToggle} = props


    return (
        <AppBar position="static">
            <IconButton onClick={handleToggle} color="inherit">

                <MenuIcon />
            </IconButton>
        </AppBar>
    )
}

export default MainAppBar