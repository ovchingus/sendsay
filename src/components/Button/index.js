import React from 'react'

import './style.css'

const Button = ({ children, className, textOnly }) => {
  return (
    <button className={`Button ${textOnly ? 'Button--textOnly' : 'Button--normal'} ${className}`}>
      {children}
    </button>
  )
}

export default Button
