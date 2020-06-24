import * as React from 'react'

type ParagraphTextProps = {
    className?:string, 
    text:string
}

const ParagraphText = (props: ParagraphTextProps) => {
    return <p className={props.className}>{props.text}</p>
}

export default ParagraphText