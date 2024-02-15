import Pagination from "@/components/dashboard/pagination/pagination";
import Search from "@/components/dashboard/search/search";
import { deleteProduct } from "@/lib/actions";
import { fetchProducts } from "@/lib/data";
import { ProductData } from "@/type/type";

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
import Image from "next/image";
import Link from "next/link";

const Products = async ({
  searchParams,
}: {
  searchParams: { q: string; page: number };
}) => {
  // urldeki query ve page sayi
  const query = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, products } = await fetchProducts(query, page);
  return (
    <div className="mx-5 rounded-2xl border border-tremor-border bg-white/5 p-5 shadow-tremor-dropdown backdrop-blur-sm">
      {/* search */}
      <div className="flex justify-between">
        <Search placeholder="Search for a products..." />
        <Link href="/dashboard/products/add">
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
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Created at</TableHeaderCell>
            <TableHeaderCell>Stock</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((product: ProductData) => (
            <TableRow key={product.id}>
              <TableCell className="flex items-center gap-3">
                <Image
                  src={product.img || "/noproduct.jpg"}
                  alt="product"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                {product.title}
              </TableCell>
              <TableCell>{product.desc}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>
                {product.createdAt?.toString().slice(4, 16)}
              </TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell className="space-x-4">
                <Link href={`/dashboard/products/${product.id}`}>
                  <Badge className="cursor-pointer" color="green">
                    Edit
                  </Badge>
                </Link>

                <form action={deleteProduct} className="inline">
                  <input type="hidden" name="id" value={product.id} />
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

export default Products;
