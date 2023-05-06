/* eslint-disable react/jsx-key */
import { TableOptions, useTable } from "react-table";
import { useMemo } from "react";
import { TablePropTypes } from "./types";
import { table } from "./styles";

const Table = ({ columns, data }: TablePropTypes) => {
  const tableData = useMemo(() => data, [data]);
  const tableColumns = useMemo(() => columns, [columns]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: tableColumns,
      data: tableData,
    } as unknown as TableOptions<{}>);

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()} css={(theme) => table(theme)}>
          <thead>
            {headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row: any) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => (
                    <td {...cell.getCellProps()}>
                      {" "}
                      {cell.value ? cell.render("Cell") : "--"}{" "}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
