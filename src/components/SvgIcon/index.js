import React from 'react'

const SvgIcon = ({ src, alt, className }) => {
  return (
    <img src={src} className={className} alt={alt} />
  )
}

export default SvgIcon
