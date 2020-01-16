import React from 'react'
import { useTable, useBlockLayout } from 'react-table'

import './style.css'

const defaultPropGetter = () => ({})

const Table = ({
  columns,
  data,
  className,
  getHeaderProps = defaultPropGetter,
  getColumnProps = defaultPropGetter,
  getRowProps = defaultPropGetter,
  getCellProps = defaultPropGetter
}) => {
  const defaultColumn = React.useMemo(
    () => ({
      width: 80
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useBlockLayout
  )

  return (
    <table className={`Table ${className}`} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, ind) => (
          <tr key={`headerGroup_${ind}`} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, ind) => (
              <th
                key={`column_${ind}`}
                {...column.getHeaderProps([
                  {
                    className: column.className,
                    style: column.style
                  },
                  getColumnProps(column),
                  getHeaderProps(column)
                ])}
              >
                {column.render('Header')}
              </th>
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
                  return (
                    <td
                      key={`cell_${ind}`}
                      {...cell.getCellProps([
                        {
                          className: cell.column.className,
                          style: cell.column.style
                        },
                        getColumnProps(cell.column),
                        getCellProps(cell)
                      ])}
                    >
                      {cell.render('Cell')}
                    </td>)
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
