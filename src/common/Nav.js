import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'


const Nav = () => {
    return (

            <div>

                <Route extact path="/login" component={TempView}/>
                <Route extact path="/messages" component={TempView}/>
                <Route extact path="/users" component={TempView}/>

            </div>

    )

}

export default Nav