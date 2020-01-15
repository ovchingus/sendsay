import React from 'react'
import Table from 'components/Table'

const MailSendedTable = ({ className }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Дата',
        accessor: 'date',
        width: '120'
      },
      {
        Header: 'Тема',
        accessor: 'theme',
        width: '520'
      },
      {
        Header: 'Статус',
        accessor: 'status',
        width: '100'
      }
    ],
    []
  )

  const data = [
    {
      date: '30 сентября',
      theme: 'Тема письма, которая не поместится в эту строку, потому что очень длинная промо очень',
      status: 'Отправлено'
    },
    {
      date: '30 сентября',
      theme: 'Тема письма, которая не поместится в эту строку, потому ч...',
      status: 'В очереди'
    },
    {
      date: '30 сентября',
      theme: 'Тема письма, которая не поместится в эту строку, потому ч...',
      status: 'Ошибка'
    }
  ]

  return (
    <Table className={className} columns={columns} data={data} />
  )
}

export default MailSendedTable
