import * as React from 'react'

type SpanTextProps = {
    className?:string, 
    text:string
}

const SpanText = (props: SpanTextProps) => {
    return <span className={props.className}>{props.text}</span>
}

export default SpanText