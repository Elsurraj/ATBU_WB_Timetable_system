import React from 'react'
import Header from '../../Components/Header/Header'

import Footer from '../../Components/Footer/Footer'
import Routers from '../routes/Routers'


const layout = () => {
    return (
        <div>
            <Header/>
            <Routers />
            <Footer />
        </div>
    )
}

export default layout
