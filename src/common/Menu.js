import React, {Components} from 'react'
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/Menu'
import {withStyles} from '@material-ui/core/styles'

const Menu = () => {
    return (
        <List>

            <MenuItem>
                <Link to="/messages">Wiadomości</Link>
            </MenuItem>
            <MenuItem>
                <Link to="/users">Użytkownicy</Link></MenuItem>
            < Divider/>
            <MenuItem>
                <Link to="/login">Logowanie</Link></MenuItem>
        </List>
    )
}

export default Menu


