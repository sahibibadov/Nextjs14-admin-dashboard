"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type linkProps = {
  title: string;
  path: string;
  icon: JSX.Element;
};
const MenuLink: React.FC<linkProps> = ({ title, path, icon }) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <Link
      href={path}
      className={cn(
        "flex items-center gap-3 border-l-4 border-transparent from-black/10 p-4  hover:border-black hover:bg-gradient-to-r",
        {
          "border-black bg-gradient-to-r from-black/10": isActive,
        },
      )}
    >
      {icon}
      {title}
    </Link>
  );
};

export default MenuLink;
