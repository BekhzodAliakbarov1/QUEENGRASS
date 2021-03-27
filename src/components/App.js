import React, { Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './Contacts/Contact'
import Footer from './Footer/Footer'
import History from './History/History'
import Home from './Home/Home'
import Home1 from './Home/HomeParts/Home1'
import Navbar from './Navbar/Navbar'
import SideBar from './Sidebar/SideBar'
import Politika from './Zayavka/Politika'
import Zayavka from './Zayavka/Zayavka'

function App() {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <SideBar />
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
                    <Route exact path='/about'>
                        <Home1 title='About Page'/>
                        <History />
                    </Route>
                    <Route path='/politika' exact>
                        <Politika />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Fragment>
    )
}

export default App
