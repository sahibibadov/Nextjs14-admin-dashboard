import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/dashboard/pagination/pagination";
import Search from "@/components/dashboard/search/search";
import { fetchUsers } from "@/lib/data";
import {
  Button,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { UserData } from "@/type/type";
import { deleteUser } from "@/lib/actions";

const Users = async ({
  searchParams,
}: {
  searchParams: { q: string; page: number };
}) => {
  // urldeki query ve page sayi
  const query = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, users } = await fetchUsers(query, page);
  // admin mail
  const adminMail = "admin@gmail.com";
  return (
    <div className="mx-5 rounded-2xl border border-tremor-border bg-white/5 p-5 shadow-tremor-dropdown backdrop-blur-sm">
      {/* search */}
      <div className="flex justify-between">
        <Search placeholder="Search for a users..." />
        <Link href="/dashboard/users/add">
          <Button
            variant="primary"
            color="gray"
            className="border-tremor-border"
          >
            Add New
          </Button>
        </Link>
      </div>
      {/* table */}
      <Table>
        <TableHead>
          <TableRow className="*:dark:text-black">
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Created at</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user: UserData) => (
            <TableRow key={user.id}>
              <TableCell className="flex items-center gap-3">
                <Image
                  src={user?.img || "/noavatar.png"}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                {user.username}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.createdAt?.toString().slice(4, 16)}</TableCell>
              <TableCell>{user.isAdmin ? "Admin" : "User"}</TableCell>
              <TableCell>
                {user.isActive ? (
                  <Badge color="green">Active</Badge>
                ) : (
                  <Badge color="yellow">Passive</Badge>
                )}
              </TableCell>
              <TableCell
                className={`space-x-4 ${adminMail === user.email ? "pointer-events-none opacity-35 " : ""}`}
              >
                <Link href={`/dashboard/users/${user.id}`}>
                  <Badge className="cursor-pointer" color="green">
                    Edit
                  </Badge>
                </Link>

                <form action={deleteUser} className="inline">
                  <input type="hidden" name="id" value={user.id} />
                  <button type="submit">
                    <Badge className="cursor-pointer" color="red">
                      Delete
                    </Badge>
                  </button>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination count={count} />
    </div>
  );
};

export default Users;
