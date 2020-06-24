import * as React from 'react'

type ButtonProps = {
    className:string, 
    arrow: boolean,
    value: string
}

const Button = (props : ButtonProps) =>{
return <button className={props.className} >{props.arrow && <div></div>}{props.value}</button>
}

export default Button