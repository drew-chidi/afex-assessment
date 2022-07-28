import React, { useState, useReducer } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const defaultData = [
  {
    Product: "Soybeans (SSBS)",
    Quantity: "2003",
    Bid: 1736.92,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    Product: "Soybeans (SSBS)",
    Quantity: "2003",
    Bid: 1736.92,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    Product: "Soybeans (SSBS)",
    Quantity: "2003",
    Bid: 1736.92,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    Product: "Soybeans (SSBS)",
    Quantity: "2003",
    Bid: 1736.92,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    Product: "Soybeans (SSBS)",
    Quantity: "2003",
    Bid: 1736.92,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    Product: "Soybeans (SSBS)",
    Quantity: "2003",
    Bid: 1736.92,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("Product", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.Quantity, {
    id: "Quantity",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Quantity</span>,
  }),
  columnHelper.accessor("Bid", {
    header: () => "Bid Price",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("visits", {
    // header: () => <span>Visits</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
  }),
];

const ProductTable = () => {
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

export default ProductTable;
