import React from 'react'

import './style.css'

const TextArea = ({ label, placeholder, className, fieldStyle, ...props }) => {
  return (
    <div className={`TextArea ${className}`}>
      <div className='TextArea-label'>{label}</div>
      <textarea
        className={`TextArea-field ${fieldStyle}`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

export default TextArea
