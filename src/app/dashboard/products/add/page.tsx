import { addProduct } from "@/lib/actions";
import {
  Button,
  NumberInput,
  Select,
  SelectItem,
  TextInput,
  Textarea,
} from "@tremor/react";

const AddProduct = () => {
  return (
    <div className="mx-5 rounded-2xl border border-tremor-border bg-white/5 p-5 shadow-tremor-dropdown backdrop-blur-sm">
      <form action={addProduct} className="grid grid-cols-2 gap-5">
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
            placeholder="Title"
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
  );
};

export default AddProduct;
