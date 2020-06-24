import * as React from 'react'

import SpanText from '../atoms/spantext'

const Navlink = (props  ) =>{
    // const [iconImage, setIconImage] = useState({props.iconWhite})

    type NavlinkData = {
        iconWhite?: HTMLImageElement,
        linktext: string
        icon?: boolean
    }
    return <div className={props.className}>
        {props.data && props.data.map((item:NavlinkData, index) => 
    
        <div key={index} >
            {item.linktext && 
                <SpanText text={item.linktext} />
            }
        </div>
    
    )}
    </div>
}

export default Navlink