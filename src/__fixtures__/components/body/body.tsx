import * as React from 'react';
import Herobanner from '../../molecules/herobanner'
import ContinueWatchList from '../../molecules/continuewatching'
import MyStuff from '../../molecules/mystuffbanner'

import BannerImage from '../../images/continue-watch.png'
import channelLogo from '../../images/tlc.png'

type contnueWatchListDataType = {
    Title:string,
    EpisodeTitle: string,
    BannerImg: HTMLImageElement
}

const contnueWatchListData : Array<contnueWatchListDataType> = [
    {
        Title:"Title 1",
        EpisodeTitle: "S1 E1 - Episode Title",
        BannerImg : BannerImage
    },
    {
        Title:"Title 2",
        EpisodeTitle: "S1 E1 - Episode Title",
        BannerImg : BannerImage
    },
    {
        Title:"Title 3",
        EpisodeTitle: "S1 E1 - Episode Title",
        BannerImg : BannerImage
    },
    {
        Title:"Title 4",
        EpisodeTitle: "S1 E1 - Episode Title",
        BannerImg : BannerImage
    },
    {
        Title:"Title 5",
        EpisodeTitle: "S1 E1 - Episode Title",
        BannerImg : BannerImage
    }

]

type myStuffType = {
    Title:string,
    Description: string,
    logo: HTMLImageElement
}

const myStuff : Array<myStuffType> = [
    {
        Title:"Title1",
        Description: "Title1 Title1 Title1 Title1 Title1 Title1 Title1 Title1 Title1 Title1",
        logo:channelLogo
    },
    {
        Title:"Title2",
        Description: "Title2 Title2 Title2 Title2 Title2 Title2 Title2 Title2 Title2 Title2",
        logo:channelLogo
    },
    {
        Title:"Title3",
        Description: "Title3 Title3 Title3 Title3 Title3 Title3 Title3 Title3 Title3 Title3",
        logo:channelLogo
    },
    {
        Title:"Title4",
        Description: "Title4 Title4 Title4 Title4 Title4 Title4 Title4 Title4 Title4 Title4",
        logo:channelLogo
    },
    {
        Title:"Title5",
        Description: "Title5 Title5 Title5 Title5 Title5 Title5 Title5 Title5 Title5 Title5",
        logo:channelLogo
    },
    {
        Title:"Title6",
        Description: "Title6 Title6 Title6 Title6 Title6 Title6 Title6 Title6 Title6 Title6",
        logo:channelLogo
    },
    {
        Title:"Title7",
        Description: "Title7 Title7 Title7 Title7 Title7 Title7 Title7 Title7 Title7 Title7",
        logo:channelLogo
    },
    {
        Title:"Title8",
        Description: "Title8 Title8 Title8 Title8 Title8 Title8 Title8 Title8 Title8 Title8",
        logo:channelLogo
    }
]
const Body = () => {
    
    return(
            <React.Fragment>
                <Herobanner herobannerclassName="hero-banner" herooverlayclassName="hero-overlay" />
                <ContinueWatchList className="continueWatch-banner" heading="Continue Watching" data={contnueWatchListData} />
                <MyStuff className="mystuff-banner" heading="My Stuff" data={myStuff} />
            </React.Fragment>
        )
    
}

export default Body