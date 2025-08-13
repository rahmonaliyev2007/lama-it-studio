import React from 'react'
import "./button.css"
import GradientText from '../GradientText/GradientText'
const Button = ({text}: {text:string}) => {
  return (
    <button className={`gradient-button !z-[70]`}><GradientText text={text}/></button>
  )
}

export default Button