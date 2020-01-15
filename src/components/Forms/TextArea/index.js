import React from 'react'

import './style.css'

const TextArea = ({ label, placeholder, className, fieldStyle }) => {
  return (
    <form className={`TextArea ${className}`}>
      <div className='TextArea-label'>{label}</div>
      <textarea className={`TextArea-field ${fieldStyle}`} placeholder={placeholder} />
    </form>
  )
}

export default TextArea
