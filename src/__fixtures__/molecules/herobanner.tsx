import * as React from 'react';
import Image from '../atoms/image';
import HerobannerOverlay from './herobanner_overlay';

import heroimage from '../images/hero_banner_big.png';
import heroimageSmall from '../images/hero_banner_small.png';

type HerobannerProps = {
    herobannerclassName: string,
    herooverlayclassName: string
}

var heroimageResp = heroimage;
const getImage = (x) => {
    if (x.matches) { // If media query matches
        heroimageResp = heroimage
      } else {
        heroimageResp = heroimageSmall
      }
}

const Herobanner = (props : HerobannerProps) =>{
    var x = window.matchMedia("(min-width: 600px)");
    getImage(x)
    x.addListener(getImage)
    return (
    <>
        <Image className={props.herobannerclassName} imgSrc={heroimageResp} />
        <HerobannerOverlay className={props.herooverlayclassName} />
    </>
    )
}

export default Herobanner