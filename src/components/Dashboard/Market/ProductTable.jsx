// import React, { useState, useReducer } from "react";
// import {
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";

// const defaultData = [
//   {
//     Product: "Soybeans (SSBS)",
//     Quantity: "2003",
//     Bid: 1736.92,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     Product: "Soybeans (SSBS)",
//     Quantity: "2003",
//     Bid: 1736.92,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     Product: "Soybeans (SSBS)",
//     Quantity: "2003",
//     Bid: 1736.92,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     Product: "Soybeans (SSBS)",
//     Quantity: "2003",
//     Bid: 1736.92,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     Product: "Soybeans (SSBS)",
//     Quantity: "2003",
//     Bid: 1736.92,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
//   {
//     Product: "Soybeans (SSBS)",
//     Quantity: "2003",
//     Bid: 1736.92,
//     visits: 100,
//     status: "In Relationship",
//     progress: 50,
//   },
// ];

// const columnHelper = createColumnHelper();

// const columns = [
//   columnHelper.accessor("Product", {
//     cell: (info) => info.getValue(),
//   }),
//   columnHelper.accessor((row) => row.Quantity, {
//     id: "Quantity",
//     cell: (info) => <i>{info.getValue()}</i>,
//     header: () => <span>Quantity</span>,
//   }),
//   columnHelper.accessor("Bid", {
//     header: () => "Bid Price",
//     cell: (info) => info.renderValue(),
//   }),
//   columnHelper.accessor("visits", {
//     // header: () => <span>Visits</span>,
//     cell: (info) => info.renderValue(),
//   }),
//   columnHelper.accessor("status", {
//     header: "Status",
//   }),
//   columnHelper.accessor("progress", {
//     header: "Profile Progress",
//   }),
// ];

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import classes from "./ProductTable.module.css";
const ProductTable = () => {
  return (
    <TableContainer sx={{ flex: "50%" }}>
      <Table size='md' sx={{ backgroundColor: "red", flexBasis: "50%" }}>
        <Thead>
          <Tr>
            <Th>Products</Th>
            <Th>Quantity</Th>
            <Th isNumeric className={classes.head}>
              <p>Bid Price</p>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>
              <div className={classes.bid}>
                <p>1736.92</p>
                <button>Buy</button>
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>
              <div className={classes.bid}>
                <p>1736.92</p>
                <button>Buy</button>
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>
              <div className={classes.bid}>
                <p>1736.92</p>
                <button>Buy</button>
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>
              <div className={classes.bid}>
                <p>1736.92</p>
                <button>Buy</button>
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>
              <div className={classes.bid}>
                <p>1736.92</p>
                <button>Buy</button>
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>
              <div className={classes.bid}>
                <p>1736.92</p>
                <button>Buy</button>
              </div>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
// const [data, setData] = useState(() => [...defaultData]);
// const rerender = useReducer(() => ({}), {})[1];

// const table = useReactTable({
//   data,
//   columns,
//   getCoreRowModel: getCoreRowModel(),
// });
// return (
//     <div>
//       <div className='p-2'>
//         <table>
//           <thead>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <tr key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => (
//                   <th key={header.id}>
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody>
//             {table.getRowModel().rows.map((row) => (
//               <tr key={row.id}>
//                 {row.getVisibleCells().map((cell) => (
//                   <td key={cell.id}>
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className='h-4' />
//       </div>
//     </div>
//   );
// };
