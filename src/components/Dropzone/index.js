import React, { useMemo } from 'react'
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

function Dropzone ({ className }) {
  const {
    acceptedFiles,
    rejectedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'image/jpg, image/png, image/gif, .doc, .docx, .xls, .xlsx, .pdf, .zip',
    maxSize: 5000000,
    multiple: true,
    noClick: true
  })

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [isDragAccept, isDragActive, isDragReject])

  const acceptedFilesItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  const rejectedFilesItems = rejectedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <div className={`Dropzone ${className}`}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div className='Dropzone-title'>Бросайте файлы сюда, я ловлю</div>
        <div className='Dropzone-text'>Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы. Размеры файла до 5 МБ</div>
      </div>
      {/* <aside>
        <h4>Accepted files</h4>
        <ul>
          {acceptedFilesItems}
        </ul>
        <h4>Rejected files</h4>
        <ul>
          {rejectedFilesItems}
        </ul>
      </aside> */}
    </div>
  )
}

export default Dropzone
