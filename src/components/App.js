import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './Contacts/Contact'
import Home from './Home/Home'
import Home1 from './Home/HomeParts/Home1'
import Navbar from './Navbar/Navbar'
import Zayavka from './Zayavka/Zayavka'

function App() {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home1 title='Queens Grass International'/>
                        <Home />
                    </Route>
                    <Route exact path='/contact'>
                        <Home1 title='Contact'/>
                        <Contact />
                    </Route>
                    <Route exact path='/request'>
                        <Home1 title='Requests'/>
                        <Zayavka />
                    </Route>
                </Switch>
                <h1 style={{paddingTop:'200vh'}}>dsfg</h1>
            </Router>
        </Fragment>
    )
}

export default App
