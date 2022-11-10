import React from 'react'
import './Button.css';

const Button = ({variant, text}) => {
  return (
    <>
        <button className={variant}>{text}</button>
    </>
  )
}

export default Button