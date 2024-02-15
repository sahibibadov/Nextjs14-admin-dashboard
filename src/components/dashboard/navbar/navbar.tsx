"use client";
import { TextInput } from "@tremor/react";
import { usePathname } from "next/navigation";

import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="m-5 flex items-center justify-between rounded-2xl border bg-white/5 p-4 shadow-tremor-dropdown backdrop-blur-sm">
      {/* breadcrumb */}
      <div className="font-bold capitalize text-tremor-content-strong">
        {pathname.split("/").pop()}
      </div>
      {/* menu */}
      <nav className="flex items-center gap-5">
        {/* search input */}
        <div className="relative">
          <MdSearch
            className="absolute left-2 top-1/2 -translate-y-1/2"
            size={20}
            color="gray"
          />
          <input
            placeholder="Search"
            className="form-input rounded-lg border-tremor-border bg-transparent pl-8 hover:border-gray-300 focus:border-gray-300 focus:ring-1 focus:ring-tremor-content-strong"
          />
        </div>
        {/* notification */}
        <div className="flex items-center gap-5">
          <MdOutlineChat size={20} color="gray" />
          <MdNotifications size={20} color="gray" />
          <MdPublic size={20} color="gray" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
