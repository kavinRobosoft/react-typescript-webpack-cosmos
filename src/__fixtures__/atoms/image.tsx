import * as React from 'react'

type ImageProps = {
   imgSrc:HTMLImageElement | void, 
   className?:string
}

const Image = (props : ImageProps) => {
   return <img src={props.imgSrc} className={props.className} />
}

export default Image