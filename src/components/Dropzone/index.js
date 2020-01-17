/* global FileReader */
import React, { useMemo, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import './style.css'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  border: '1px dashed #CCCCCC',
  borderRadius: 5,
  padding: 30,
  // margin + borders + paddings (top and bottom)
  height: 'calc(100% - 72px)',
  background: 'rgba(255, 255, 255, 0.9)',
  outline: 'none',
  transition: 'border .24s ease-in-out'
}

const activeStyle = {
  borderColor: '#2196f3'
}

const acceptStyle = {
  borderColor: '#00e676'
}

const rejectStyle = {
  borderColor: '#ff1744'
}

function Dropzone ({ className, handleAccept, maxFileSize, maxFilesSize }) {
  const [files, setFiles] = useState([])

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = async () => {
        const binaryStr = reader.result
        await setFiles([
          ...files,
          {
            name: file.name,
            base64: binaryStr
          }]
        )
      }
      reader.readAsDataURL(file)
    })
  }

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'image/jpg, image/png, image/gif, .doc, .docx, .xls, .xlsx, .pdf, .zip',
    maxSize: maxFileSize,
    multiple: true,
    noClick: true,
    onDrop
  })

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [isDragAccept, isDragActive, isDragReject])

  useEffect(() => {
    handleAccept(files)
  }, [files, handleAccept])

  return (
    <div className={`Dropzone ${className}`}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div className='Dropzone-title'>Бросайте файлы сюда, я ловлю</div>
        <div className='Dropzone-text'>Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы. Размеры файла до 5 МБ</div>
      </div>
    </div>
  )
}

export default Dropzone
