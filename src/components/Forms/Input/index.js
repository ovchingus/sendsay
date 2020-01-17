import React from 'react'

import './style.css'

const Input = ({ name, label, placeholder, className, type }) => {
  return (
    <form className={`Input ${className}`}>
      <div className='Input-label'>{label}</div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className='Input-field'
      />
    </form>
  )
}

export default Input
