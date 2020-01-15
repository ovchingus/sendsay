import React from 'react'

import './style.css'

const Input = ({ label, placeholder, className }) => {
  return (
    <form className={`Input ${className}`}>
      <div className='Input-label'>{label}</div>
      <input placeholder={placeholder} className='Input-field' />
    </form>
  )
}

export default Input
