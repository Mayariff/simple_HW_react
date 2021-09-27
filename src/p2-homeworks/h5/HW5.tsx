import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './Header'
import Routes from './Routes'

export  function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Routes/>

            </HashRouter>
        </div>
    )
}
