import React from 'react'
import SvgIcon from 'components/SvgIcon'
import Button from 'components/Button'

import IconPaperclipMD from 'assets/IconPaperclipMD.svg'
import IconTrash from 'assets/IconTrash.svg'

import './style.css'

const Attachment = ({ className }) => {
  return (
    <div className={`Attachment ${className}`}>
      <SvgIcon className='Attachment-icon' src={IconPaperclipMD} alt='paperclip-icon' />
      <span className='Attachment-filename'>Afqk.jpg</span>
      <Button textOnly className='Attachment-removeButton'>
        <SvgIcon src={IconTrash} className='Attachment-removeButtonIcon' />
        Удалить
      </Button>
    </div>
  )
}

export default Attachment
