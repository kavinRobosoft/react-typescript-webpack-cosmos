import * as React from 'react';
import Header from './components/header/header'
import Body from './components/body/body'

import './styles/main.scss';
import './styles/countinuewatchrow.scss';
import './styles/header.scss';
import './styles/herobanner.scss';
import './styles/mystuffrow.scss';


const  App  = () => {
    return (
        <>
            <Body />
            <Header />
        </>
        )
}

App.displayName = "App"

export default  App;