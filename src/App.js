import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import logo from './logo.svg'
import './App.css'

import MainDrawer from './common/Drawer'
import AppBar from './common/AppBar'

class App extends Component {

    state = {
        isDrawerOpen: true
    }

    handleToggle(){
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        })
    }

    render () {
        return (
            <div className="App">
                <MainDrawer
                    isDrawerOpen={this.state.isDrawerOpen}
                    handleToggle={()=>{this.handleToggle()}}
                />
                <AppBar
                    handleToggle={()=>{this.handleToggle()}}
                />
            </div>
        )
    }
}

export default App