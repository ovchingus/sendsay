import React from 'react'
import SvgIcon from 'components/SvgIcon'
import Button from 'components/Button'

import IconPaperclipMD from 'assets/IconPaperclipMD.svg'
import IconTrash from 'assets/IconTrash.svg'

import './style.css'

const Attachment = ({ className, name, onRemove }) => {
  return (
    <div className={`Attachment ${className}`}>
      <SvgIcon className='Attachment-icon' src={IconPaperclipMD} alt='paperclip-icon' />
      <span className='Attachment-filename'>{name}</span>
      <Button textOnly onClick={() => onRemove()} className='Attachment-removeButton'>
        <SvgIcon src={IconTrash} alt='trash-icon' />
        &nbsp;Удалить
      </Button>
    </div>
  )
}

export default Attachment
