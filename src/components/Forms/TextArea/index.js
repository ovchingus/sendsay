import React from 'react'

import './style.css'

const TextArea = ({ label, placeholder, className, fieldStyle, ...props }) => {
  return (
    <form className={`TextArea ${className}`}>
      <div className='TextArea-label'>{label}</div>
      <textarea
        className={`TextArea-field ${fieldStyle}`}
        placeholder={placeholder}
        {...props}
      />
    </form>
  )
}

export default TextArea
