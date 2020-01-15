import React from 'react'
import { useTable } from 'react-table'

import './style.css'

const Table = ({ columns, data, className }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <table className={`Table ${className}`} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, ind) => (
          <tr key={`headerGroup_${ind}`} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, ind) => (
              <th key={`column_${ind}`} {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(
          (row, ind) => {
            prepareRow(row)
            return (
              <tr key={`row_${ind}`} {...row.getRowProps()}>
                {row.cells.map((cell, ind) => {
                  return <td key={`cell_${ind}`} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          }
        )}
      </tbody>
    </table>
  )
}

export default Table
