import { addUser } from "@/lib/actions";
import {
  Button,
  NumberInput,
  Select,
  SelectItem,
  TextInput,
  Textarea,
} from "@tremor/react";

const AddUser = () => {
  return (
    <div className="mx-5 rounded-2xl border border-tremor-border bg-white/5 p-5 shadow-tremor-dropdown backdrop-blur-sm">
      <form action={addUser} className="grid grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="username"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Username
          </label>
          <TextInput
            type="text"
            id="username"
            name="username"
            required
            placeholder="Username"
            className="mt-2"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Email
          </label>
          <TextInput
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            className="mt-2"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Password
          </label>
          <TextInput
            type="password"
            id="password"
            name="password"
            required
            placeholder="Password"
            className="mt-2"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Phone
          </label>
          <TextInput
            type="text"
            id="phone"
            name="phone"
            required
            placeholder="Phone"
            className="mt-2"
          />
        </div>

        <div>
          <label
            htmlFor="isAdmin"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Is Admin
          </label>
          <Select
            name="isAdmin"
            id="isAdmin"
            placeholder="Choose a isAdmin"
            className="mt-2"
          >
            <SelectItem value={"true"}>Yes</SelectItem>
            <SelectItem value={"false"}>no</SelectItem>
          </Select>
        </div>
        <div>
          <label
            htmlFor="isActive"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Is Active
          </label>
          <Select
            name="isActive"
            id="isActive"
            placeholder="Choose a isActive"
            className="mt-2"
          >
            <SelectItem value={"true"}>Yes</SelectItem>
            <SelectItem value={"false"}>no</SelectItem>
          </Select>
        </div>

        <div className="col-span-2">
          <label
            htmlFor="address"
            className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
          >
            Address
          </label>
          <Textarea
            id="address"
            name="address"
            required
            placeholder="Address"
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

export default AddUser;
