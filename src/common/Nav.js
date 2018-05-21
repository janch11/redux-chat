import React, { Component } from 'react'

import { HashRouter as Router, Route, Link } from 'react-router-dom'
import {MessagesList} from '../MessageList/'


const TempView1 = ()=>{
    return (
        <div>Logowanie</div>
    )
}



const TempView3 = ()=>{
    return (
        <div>Użytkownicy</div>
    )
}

const Nav = () => {
    return (
        <div>
            <Route exact path="/login" component={TempView1} />
            <Route exact path="/messages" component={MessagesList} />
            <Route exact path="/users" component={TempView3} />
        </div>
    )
}
export default Nav