import * as React from 'react';

import Image from '../../atoms/image';
import Navlink from '../../molecules/headerNavbar';

import Logoimage from '../../images/discovery-logo.png'
import HomeIcon from '../../images/icon-home.png'
import MystuffIcon from '../../images/icon-mystuff.png'
import ShowsIcon from '../../images/icon-show.png'
import SearchIcon from '../../images/icon-search.png'

type HeaderlinkData = {
    icon?: boolean,
    linktext: string,
    value: string,
    iconWhite: HTMLImageElement,
    iconBlue: HTMLImageElement
}
const linkData : Array<HeaderlinkData> = [
    {
        icon:true,
        linktext: "Home",
        value: "Home",
        iconWhite:HomeIcon,
        iconBlue : MystuffIcon

    },
    {
        icon:true,
        linktext: "My Stuff",
        value: "My Stuff",
        iconWhite:MystuffIcon,
        iconBlue : HomeIcon
    },
    {
        icon:true,
        linktext: "Shows",
        value: "Shows",
        iconWhite:ShowsIcon,
        iconBlue : HomeIcon
    },
    {
        icon:true,
        linktext: "Search",
        value: "Search",
        iconWhite:SearchIcon,
        iconBlue : HomeIcon
    }
]


const Header = () =>{
    return(
        <header className="header">
            <Image  className="header-logo" imgSrc={Logoimage} />
            <Navlink className="header-navbar" icon={true} data={linkData} />
        </header>
    )
}

export default Header