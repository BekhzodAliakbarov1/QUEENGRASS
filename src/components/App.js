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
import Services from './Services/Services'
import ServicesBuilding from './Services/ServicesBuilding'
import ServicesStaking from './Services/ServicesStaking'
import ServicesConsult from './Services/ServicesConsult'
import ServicesReconstraction from './Services/ServicesReconstraction'
import QueensGrass from './Product/QueensGrass'
import LandShaft from './Product/LandShaft'
import ProductNavbar from './ProductNavbar/ProductNavbar'

// Submenues
import {grassPlane, grassPlaneText} from './Product/Json/Denis/One'
import {grassLand, grassLandText} from './Product/Json/Denis/Two'
import {grassObject, grassObjectText} from './Product/Json/Denis/Three'
import {vertikul, vertikulText} from './Product/Json/Denis/Four'
import {instrument, instrumentText} from './Product/Json/Denis/Five'
import {save, saveText} from './Product/Json/Denis/Six'
import Dennis1 from './SubDomains/Dennis1'
import Dennis2 from './SubDomains/Dennis2'
import Dennis3 from './SubDomains/Dennis3'
import Dennis4 from './SubDomains/Dennis4'
import Dennis5 from './SubDomains/Dennis5'
import Dennis6 from './SubDomains/Dennis6'


function App() {
    return (
        <Fragment>
            <Router>
                <ScrollToTop />
                <Navbar />
                <SideBar />
                <ProductNavbar />
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
                        <Services />
                    </Route>
                    <Route path='/services/building' exact>
                        <ServicesBuilding />
                    </Route>
                    <Route path='/services/staking' exact>
                        <ServicesStaking />
                    </Route>
                    <Route path='/services/consultation' exact>
                        <ServicesConsult />
                    </Route>
                    <Route path='/services/reconstraction' exact>
                        <ServicesReconstraction />
                    </Route>
                    <Route path='/product/grass'>
                        <QueensGrass/>
                    </Route>
                    <Route path='/products/landshaft'>
                        <LandShaft/>
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
                    <Route path={`/Product/dennis/1`} exact>
                        <Dennis1 product={grassPlane} text={grassPlaneText}/>
                    </Route>
                    <Route path={`/Product/dennis/2`} exact>
                        <Dennis2 product={grassLand} text={grassLandText}/>
                    </Route>
                    <Route path={`/Product/dennis/3`} exact>
                        <Dennis3 product={grassObject} text={grassObjectText}/>
                    </Route>
                    <Route path={`/Product/dennis/4`} exact>
                        <Dennis4 product={vertikul} text={vertikulText}/>
                    </Route>
                    <Route path={`/Product/dennis/5`} exact>
                        <Dennis5 product={instrument} text={instrumentText}/>
                    </Route>
                    <Route path={`/Product/dennis/6`} exact>
                        <Dennis6 product={save} text={saveText}/>
                    </Route>
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