import React, { Fragment, useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contact from './Contacts/Contact'
import Footer from './Footer/Footer'
import History from './History/History'
import Home from './Home/Home'
import Home1 from './Home/HomeParts/Home1'
import Navbar from './Navbar/Navbar'
import ProductRender from './Product/ProductGrass'
import SideBar from './Sidebar/SideBar'
import Politika from './Zayavka/Politika'
import Zayavka from './Zayavka/Zayavka'
import {ProductList as products} from '../API/ProducName'
import SelectedInfo from './InforamtionSelected/SelectedInfo'
import { useLocation } from "react-router-dom";
import Service from './Services/Service'



function App() {
    return (
        <Fragment>
            <Router>
                <ScrollToTop />
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
                    <Route path='/products' exact>
                        <ProductRender all={'All render'}/>
                    </Route>
                    <Route path='/information/:name' exact>
                        <SelectedInfo />
                    </Route>
                    <Route path='/services' exact>
                        <Service />
                    </Route>
                    {
                        products.map((product,index) => 
                            (
                                <Route key={index} path={`/product/${product.url}`} exact>
                                    <ProductRender product={product}/>
                                </Route>
                            )
                        )
                    }
                </Switch>
                <Footer />
            </Router>
        </Fragment>
    )
}

export default App

function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }