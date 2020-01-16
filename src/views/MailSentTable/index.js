import React from 'react'
import Table from 'components/Table'

const MailSentTable = ({ className }) => {
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
        width: '490'
      },
      {
        Header: 'Статус',
        accessor: 'status',
        width: '130'
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
    <Table
      className={`MailSentTable ${className}`}
      columns={columns}
      data={data}
      getCellProps={cell =>
        cell.column.Header === 'Статус' && (
          (cell.value === 'Отправлено' && ({ style: { color: '#03A100' } })) ||
          (cell.value === 'В очереди' && ({ style: { color: '#949494' } })) ||
          (cell.value === 'Ошибка' && ({ style: { color: '#FF6666' } })))}
    />
  )
}

export default MailSentTable
