import React, {Components} from 'react'
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/Menu'
import {withStyles} from '@material-ui/core/styles'

const Menu = () => {
    return (
        <List>

            <MenuItem>Wiadomości</MenuItem>
            <MenuItem>Użytkownicy</MenuItem>
            < Divider/>
            <MenuItem>Logowanie</MenuItem>
        </List>
    )
}

export default Menu


