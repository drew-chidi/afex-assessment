// import React, { useState, useReducer } from "react";
// import {
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";

// const defaultData = [
//   {
//     security: "tanner",
//     Board: "linsley",
//     order: 24,
//     matched: 100,
//     quantity: "In Relationship",
//     date: 50,
//     time: 50,
//   },
//   {
//     security: "tanner",
//     Board: "linsley",
//     order: 24,
//     matched: 100,
//     quantity: "In Relationship",
//     date: 50,
//     time: 50,
//   },
//   {
//     security: "tanner",
//     Board: "linsley",
//     order: 24,
//     matched: 100,
//     quantity: "In Relationship",
//     date: 50,
//     time: 50,
//   },
//   {
//     security: "tanner",
//     Board: "linsley",
//     order: 24,
//     matched: 100,
//     quantity: "In Relationship",
//     date: 50,
//     time: 50,
//   },
//   {
//     security: "tanner",
//     Board: "linsley",
//     order: 24,
//     matched: 100,
//     quantity: "In Relationship",
//     date: 50,
//     time: 50,
//   },
//   {
//     security: "tandy",
//     Board: "miller",
//     order: 40,
//     matched: 40,
//     quantity: "Single",
//     date: 80,
//     time: 50,
//   },
//   {
//     security: "joe",
//     Board: "dirte",
//     order: 45,
//     matched: 20,
//     quantity: "Complicated",
//     date: 10,
//     time: 50,
//   },
// ];

// const columnHelper = createColumnHelper();

// const columns = [
//   columnHelper.accessor("security", {
//     cell: (info) => info.getValue(),
//     footer: (info) => info.column.id,
//   }),
//   columnHelper.accessor((row) => row.Board, {
//     id: "board",
//     cell: (info) => <i>{info.getValue()}</i>,
//     header: () => <span>Last Name</span>,
//     footer: (info) => info.column.id,
//   }),
//   columnHelper.accessor("order", {
//     header: () => "order",
//     cell: (info) => info.renderValue(),
//     footer: (info) => info.column.id,
//   }),
//   columnHelper.accessor("visits", {
//     header: () => <span>Visits</span>,
//     footer: (info) => info.column.id,
//   }),
//   columnHelper.accessor("quantity", {
//     header: "quantity",
//     footer: (info) => info.column.id,
//   }),
//   columnHelper.accessor("date", {
//     header: "Profile date",
//     footer: (info) => info.column.id,
//   }),
// ];

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import classes from "./TradeLog.module.css";

const TradeLog = () => {
  return (
    <TableContainer>
      <div className={classes.title}>TRADE LOG</div>
      <Table size='md'>
        <Thead>
          <Tr>
            <Th>Security</Th>
            <Th>Board</Th>
            <Th>Order Type</Th>
            <Th isNumeric>Matched Pice</Th>
            <Th isNumeric>Quantity</Th>
            <Th>Date</Th>
            <Th>Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Soybeans (SBBS)</Td>
            <Td>X-Traded</Td>
            <Td isNumeric>Buy</Td>
            <Td isNumeric>1792.65</Td>
            <Td isNumeric>9265</Td>
            <Td isNumeric>17 Oct, 2020</Td>
            <Td isNumeric>07:38</Td>
          </Tr>
          <Tr>
            <Td>Soybeans (SBBS)</Td>
            <Td>X-Traded</Td>
            <Td isNumeric>Buy</Td>
            <Td isNumeric>1792.65</Td>
            <Td isNumeric>9265</Td>
            <Td isNumeric>17 Oct, 2020</Td>
            <Td isNumeric>07:38</Td>
          </Tr>
          <Tr>
            <Td>Soybeans (SBBS)</Td>
            <Td>X-Traded</Td>
            <Td isNumeric>Buy</Td>
            <Td isNumeric>1792.65</Td>
            <Td isNumeric>9265</Td>
            <Td isNumeric>17 Oct, 2020</Td>
            <Td isNumeric>07:38</Td>
          </Tr>
          <Tr>
            <Td>Soybeans (SBBS)</Td>
            <Td>X-Traded</Td>
            <Td isNumeric>Buy</Td>
            <Td isNumeric>1792.65</Td>
            <Td isNumeric>9265</Td>
            <Td isNumeric>17 Oct, 2020</Td>
            <Td isNumeric>07:38</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TradeLog;
