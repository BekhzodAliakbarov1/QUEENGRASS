import React from 'react'
import Home2 from './HomeParts/Home2'
import Home3 from './HomeParts/Home3'
import Home4 from './HomeParts/Home4'
import Home5 from './HomeParts/Home5'
import Home6 from './HomeParts/Home6'
import ProductRender from '../Product/ProductGrass'


const Home = () => {
    return (
        <div>
            <Home2/>
            <Home3/>
            <Home4/>
            <Home5/>
            <div style={{display:'none',opacity:'0'}}>
                <ProductRender style={{display: 'none'}} all={'All render'}/>
            </div>
            <Home6/>
        </div>
    )
}

export default Home
