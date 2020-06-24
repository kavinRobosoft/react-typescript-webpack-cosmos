import * as React from 'react'
import Button from '../atoms/button'

import ParagraphText from '../atoms/paratext'
import Image from '../atoms/image'

import overLayImage from '../images/guys-grocery-games.png'


const HerobannerOverlay = (props) =>{
    return (
    <div className={props.className}>

        
        <Image className="" imgSrc={overLayImage} ></Image>
        <div className="overlayTxt">
            <ParagraphText text="Messaging to the user Messaging to the user Messaging " />
            <ParagraphText text="Asfa asdf af af af affwerwer!" />
        </div>
        <div >
        <Button className='hero-banner-btn' value="Watch Series" arrow={true}/>
        <svg></svg>
        </div>
    </div>)
}

export default HerobannerOverlay