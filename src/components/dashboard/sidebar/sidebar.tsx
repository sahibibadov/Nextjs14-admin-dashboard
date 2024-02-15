import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { Button } from "@tremor/react";
import { cn } from "@/lib/utils";
import { auth, signOut } from "@/lib/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const session: any = await auth();

  return (
    <aside className=" bg-white/5 backdrop-blur-sm">
      <div className="mb-5 flex items-center gap-5 px-5">
        <Image
          src={session?.user?.img || "/noavatar.png"}
          alt="avatar"
          width={50}
          height={50}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex flex-col ">
          <span className="font-medium">{session?.user?.username}</span>
          <span className="text-xs text-tremor-content">admin</span>
        </div>
      </div>
      <ul>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span className="block px-5 text-[13px] font-semibold text-tremor-content">
              {category.title}
            </span>
            {category.list.map((item) => (
              <MenuLink
                key={item.title}
                title={item.title}
                path={item.path}
                icon={item.icon}
              />
            ))}
          </li>
        ))}
      </ul>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          className={cn(
            "flex w-full items-center gap-3 border-l-4 border-transparent from-black/10 p-4 font-semibold transition-all hover:border-black hover:bg-gradient-to-r",
          )}
        >
          <MdLogout size={20} />
          Log out
        </button>
      </form>
    </aside>
  );
};

export default Sidebar;
