import * as React from 'react';
import Header from './components/header/header'
import Body from './components/body/body'
import './styles/main.scss';


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