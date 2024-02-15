import { updateProduct } from "@/lib/actions";
import { fetchProduct } from "@/lib/data";
import { ProductData } from "@/type/type";
import {
  Button,
  NumberInput,
  Select,
  SelectItem,
  TextInput,
  Textarea,
} from "@tremor/react";
import Image from "next/image";

const ProductEdit = async ({ params: { id } }: { params: { id: string } }) => {
  const product: ProductData = await fetchProduct(id);

  return (
    <div className="mx-5 flex gap-5 rounded-2xl border border-tremor-border bg-white/5 p-5 shadow-tremor-dropdown backdrop-blur-sm">
      {/* image */}
      <div className="self-start overflow-hidden rounded-xl border border-tremor-border p-2">
        <div className="overflow-hidden rounded-[4px]">
          <Image
            src="/noproduct.jpg"
            alt="avatar"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <h3 className=" mt-3  text-xl font-medium">{product.title}</h3>
      </div>
      <div className="flex-1">
        <form action={updateProduct} className="flex flex-col gap-5">
          <input type="hidden" name="id" value={product.id} />
          <div>
            <label
              htmlFor="title"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Title
            </label>
            <TextInput
              type="text"
              id="title"
              name="title"
              required
              placeholder={product.title}
              defaultValue={product.title}
              className="mt-2"
            />
          </div>
          <div>
            <label
              htmlFor="cat"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Category
            </label>
            <Select
              name="cat"
              id="cat"
              placeholder="Choose a category"
              className="mt-2"
              defaultValue={product.cat}
            >
              <SelectItem value="kitchen">Kitchen</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="computer">Computer</SelectItem>
            </Select>
          </div>
          <div>
            <label
              htmlFor="price"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Price
            </label>
            <NumberInput
              id="price"
              name="price"
              placeholder="Price"
              className="mt-2"
              defaultValue={product.price}
            />
          </div>
          <div>
            <label
              htmlFor="stock"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Stock
            </label>
            <NumberInput
              id="stock"
              name="stock"
              placeholder="Stock"
              className="mt-2"
              defaultValue={product.stock}
            />
          </div>
          <div>
            <label
              htmlFor="color"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Color
            </label>
            <TextInput
              type="text"
              id="color"
              name="color"
              required
              placeholder="Color"
              defaultValue={product.color}
              className="mt-2"
            />
          </div>
          <div>
            <label
              htmlFor="size"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Size
            </label>
            <TextInput
              type="text"
              id="size"
              name="size"
              required
              placeholder="Size"
              defaultValue={product.size}
              className="mt-2"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="desc"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Desc
            </label>
            <Textarea
              id="desc"
              name="desc"
              required
              placeholder="Desc"
              defaultValue={product.desc}
              className="mt-2 resize-none"
              rows={5}
            />
          </div>
          <Button
            color="gray"
            size="lg"
            type="submit"
            className="col-span-2 mt-5 w-full"
          >
            Add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
