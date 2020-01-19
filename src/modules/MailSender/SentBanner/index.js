import React from 'react'

import './style.css'

const SentBanner = () => {
  return (
    <div className='SentBanner'>
      <div className='SentBanner-title'>
          Сообщение поставлено в очередь на отправку
      </div>
      <div className='SentBanner-text'>
          Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону почты получателя «abc@my.com» со скоростью электронов.
      </div>
    </div>
  )
}

export default SentBanner
