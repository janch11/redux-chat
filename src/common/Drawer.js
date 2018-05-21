import React, { Component } from 'react'


// HOC który pozwala wrzucić style do komponentu
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'

import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import Menu from './Menu'

// style wg material
const styles = theme => ({
    drawerPaper: {
        position: 'fixed',
        width: 300,


    },
});

class MainDrawer extends Component {

    render () {

        const {isDrawerOpen, handleToggle} = this.props
        return (




            <Drawer variant="persistent"
                    open={isDrawerOpen}
                    anchor={'left'}
                    classes={{
                        paper:this.props.classes.drawerPaper
                    }}
            >

                <h1 style={{marginRight:'auto', marginLeft:'auto'}}>test</h1>
                <IconButton onClick={handleToggle}><Close/></IconButton>

                <Menu/>
            </Drawer>
        )
    }
}


export default withStyles(styles,{withTheme:true})(MainDrawer)