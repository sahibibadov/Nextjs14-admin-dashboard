import { updateUser } from "@/lib/actions";
import { fetchUser } from "@/lib/data";
import { UserData } from "@/type/type";
import { Button, Select, SelectItem, TextInput, Textarea } from "@tremor/react";
import Image from "next/image";

const UserEdit = async ({ params: { id } }: { params: { id: string } }) => {
  const user: UserData = await fetchUser(id);

  return (
    <div className="mx-5 flex gap-5 rounded-2xl border border-tremor-border bg-white/5 p-5 shadow-tremor-dropdown backdrop-blur-sm">
      {/* image */}
      <div className="self-start overflow-hidden rounded-xl border border-tremor-border p-2">
        <div className="overflow-hidden rounded-[4px]">
          <Image
            src={user.img || "/noavatar.png"}
            alt="avatar"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <h3 className=" mt-3  text-xl font-medium">{user.username}</h3>
      </div>
      {/* edit inputs */}
      <div className="flex-1">
        <form action={updateUser} className="flex flex-col gap-5">
          <input type="hidden" name="id" value={user.id} />
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
              placeholder={user.username}
              defaultValue={user.username}
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
              placeholder={user.email}
              defaultValue={user.email}
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
              placeholder={user.phone}
              defaultValue={user.phone}
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
              defaultValue={user.isAdmin ? "true" : "false"}
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
              defaultValue={user.isActive ? "true" : "false"}
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
              placeholder={user.address}
              className="mt-2 resize-none"
              defaultValue={user.address}
              rows={5}
            />
          </div>
          <Button
            color="gray"
            size="lg"
            type="submit"
            className="col-span-2 mt-5 w-full"
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;
