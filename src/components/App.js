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

import Dennis from './SubDomains/Denis'
import Sisis from './SubDomains/Sisis'
// import Trilo from './SubDomains/Trilo'
import Vredo from './SubDomains/Vredo'
// import Redexim from './SubDomains/Redexim'
import Harrod from './SubDomains/Harrod'
import {denisRender} from './Product/Json/Denis/AllDenisRender'
import {sisisRender} from './Product/Json/Sisis/AllSisisRender'
// import {triloRender} from './Product/Json/Trilo/AllTriloRender'
import {vredoRender} from './Product/Json/Vredo/AllVredoRender'
// import {redeximRender} from './Product/Json/Redexim/AllRedeximRender'
import {harrodRender} from './Product/Json/Harrod/AllHarrodRender'


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
                    {
                        denisRender.map((denis,index) => (
                            <Route key={index} path={`/Product/dennis/${denis.url}`} exact>
                                <Dennis product={denis.cards} text={denis.text} title={denis.nameOfProduct}/>
                            </Route>
                        ))
                    }
                    {
                        sisisRender.map((sisis,index) => (
                            <Route key={index} path={`/Product/Sisis/${sisis.url}`} exact>
                                <Sisis product={sisis.cards} text={sisis.text} title={sisis.nameOfProduct}/>
                            </Route>
                        ))
                    }
                    {/* {
                        triloRender.map((trilo,index) => (
                            <Route key={index} path={`/Product/Trilo/${trilo.url}`} exact>
                                <Trilo product={trilo.cards} text={trilo.text} title={trilo.nameOfProduct}/>
                            </Route>
                        ))
                    } */}
                    {
                        vredoRender.map((vredo,index) => (
                            <Route key={index} path={`/Product/Vredo/${vredo.url}`} exact>
                                <Vredo product={vredo.cards} text={vredo.text} title={vredo.nameOfProduct}/>
                            </Route>
                        ))
                    }
                    {/* {
                        redeximRender.map((redexim,index) => (
                            <Route key={index} path={`/Product/Redexim/${redexim.url}`} exact>
                                <Redexim product={redexim.cards} text={redexim.text} title={redexim.nameOfProduct}/>
                            </Route>
                        ))
                    } */}
                    {
                        harrodRender.map((harrod,index) => (
                            <Route key={index} path={`/Product/Harrod/${harrod.url}`} exact>
                                <Harrod product={harrod.cards} text={harrod.text} title={harrod.nameOfProduct}/>
                            </Route>
                        ))
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