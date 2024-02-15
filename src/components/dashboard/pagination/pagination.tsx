"use client";
import { Button } from "@tremor/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Pagination = ({ count }: { count: number }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || "1";

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 4;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: "prev" | "next") => {
    type === "prev"
      ? params.set("page", String(+page - 1))
      : params.set("page", String(+page + 1));
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="mt-5 flex items-center justify-between">
      <Button
        color="gray"
        size="xs"
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
        icon={MdNavigateBefore}
      >
        Prev
      </Button>
      <Button
        color="gray"
        size="xs"
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
        icon={MdNavigateNext}
        iconPosition="right"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
