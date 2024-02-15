import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className="rounded-2xl border border-tremor-border bg-white/5 p-5 shadow-tremor-dropdown backdrop-blur-sm">
      <h2 className="mb-5 text-xl font-bold">Lates Transactions</h2>
      <Table>
        <TableHead>
          <TableRow className="*:dark:text-black">
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell className="flex items-center gap-3">
              <Image
                src="/noavatar.png"
                alt="avatar"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              Sahib
            </TableCell>
            <TableCell>
              <Badge color="green">Done</Badge>
              {/* <Badge color="yellow">Pending</Badge>
              <Badge color="red">Cancelled</Badge> */}
            </TableCell>
            <TableCell>12.02.2024</TableCell>
            <TableCell>$200</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Transactions;
