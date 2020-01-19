import React from 'react'

import './style.css'

const Input = ({ name, label, placeholder, className, type, ...props }) => {
  return (
    <div className={`Input ${className}`}>
      <label htmlFor={name} className='Input-label'>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className='Input-field'
        {...props}
      />
    </div>
  )
}

export default Input
