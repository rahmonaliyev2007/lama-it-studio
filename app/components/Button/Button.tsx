import React from 'react'
import "./button.css"
import GradientText from '../GradientText/GradientText'
const Button = ({text}: {text:string}) => {
  return (
    <button className={`gradient-button`}><GradientText text={text}/></button>
  )
}

export default Button