import React from 'react'

import './style.css'

const Button = ({ children, className, textOnly, ...props }) => {
  return (
    <button
      className={`Button ${textOnly
        ? 'Button--textOnly'
        : 'Button--normal'} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
