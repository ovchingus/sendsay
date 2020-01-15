import React from 'react'

import './style.css'

const InputGroup = ({ children, className }) => {
  return (
    <div className={`InputGroup ${className}`}>
      {children}
    </div>
  )
}

export default InputGroup
