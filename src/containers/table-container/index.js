import React, { useEffect } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import { Table } from "../../components";

function TableContainer({ columns, data, filterColumn, filter, setIsEditModalOpen, setCar }) {
  const instance = useTable({ columns, data }, useFilters, useSortBy);
  const { getTableBodyProps, headerGroups, rows, prepareRow, setFilter } = instance;

  useEffect(() => {
    setFilter(filterColumn, filter);
  }, [filter, filterColumn, setFilter]);

  return (
    <Table>
      <Table.Head>
        {headerGroups.map((headerGroup) =>
          <Table.Row {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) =>
              <Table.ColumnTitle {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <Table.Sign
                  status={column.isSorted ? (column.isSortedDesc ? "desc" : "asc") : "none"}
                />
              </Table.ColumnTitle>
            )}
          </Table.Row>
        )}
      </Table.Head>
      <Table.Body {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Table.Row {...row.getRowProps()} onClick={() => {
              setIsEditModalOpen(true);
              setCar({
                id: row.cells[0].value,
                brand: row.cells[1].value,
                model: row.cells[2].value,
                year: row.cells[3].value,
              });
            }}>
              {row.cells.map((cell) =>
                <Table.Cell {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </Table.Cell>
              )}
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default TableContainer;