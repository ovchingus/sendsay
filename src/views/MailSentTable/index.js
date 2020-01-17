import React from 'react'
import { connect } from 'react-redux'
import Table from 'components/Table'

import './style.css'

const MailSentTable = ({ className, sentList }) => {
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

  return (
    <div className='MailSentTable'>
      <div className='MailSentTable-title'>Отправленные сообщения</div>
      {sentList.length > 0 ? (
        <Table
          className={`MailSentTable-data ${className}`}
          columns={columns}
          data={sentList}
          getCellProps={cell =>
            cell.column.Header === 'Статус' &&
            ((cell.value === 'Отправлено' && { style: { color: '#03A100' } }) ||
              (cell.value === 'В очереди' && { style: { color: '#949494' } }) ||
              (cell.value === 'Ошибка' && { style: { color: '#FF6666' } }))}
        />
      ) : (
        <div className='MailSentTable--empty'>
          Сообщения ещё не отправлялись
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  sentList: state.sent
})

export default connect(mapStateToProps)(MailSentTable)
