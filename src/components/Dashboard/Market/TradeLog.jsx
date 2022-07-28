import React, { useState, useReducer } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const defaultData = [
  {
    security: "tanner",
    Board: "linsley",
    order: 24,
    matched: 100,
    quantity: "In Relationship",
    date: 50,
    time: 50,
  },
  {
    security: "tanner",
    Board: "linsley",
    order: 24,
    matched: 100,
    quantity: "In Relationship",
    date: 50,
    time: 50,
  },
  {
    security: "tanner",
    Board: "linsley",
    order: 24,
    matched: 100,
    quantity: "In Relationship",
    date: 50,
    time: 50,
  },
  {
    security: "tanner",
    Board: "linsley",
    order: 24,
    matched: 100,
    quantity: "In Relationship",
    date: 50,
    time: 50,
  },
  {
    security: "tanner",
    Board: "linsley",
    order: 24,
    matched: 100,
    quantity: "In Relationship",
    date: 50,
    time: 50,
  },
  {
    security: "tandy",
    Board: "miller",
    order: 40,
    matched: 40,
    quantity: "Single",
    date: 80,
    time: 50,
  },
  {
    security: "joe",
    Board: "dirte",
    order: 45,
    matched: 20,
    quantity: "Complicated",
    date: 10,
    time: 50,
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("security", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.Board, {
    id: "board",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("order", {
    header: () => "order",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("quantity", {
    header: "quantity",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("date", {
    header: "Profile date",
    footer: (info) => info.column.id,
  }),
];

const TradeLog = () => {
  const [data, setData] = useState(() => [...defaultData]);
  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <div className='p-2'>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className='h-4' />
      </div>
    </div>
  );
};

export default TradeLog;
