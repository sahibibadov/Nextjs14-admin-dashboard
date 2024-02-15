"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }: { placeholder: string }) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (query) {
      query.length > 2 && params.set("q", query);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="relative">
      <MdSearch
        className="absolute left-2 top-1/2 -translate-y-1/2"
        size={20}
        color="gray"
      />
      <input
        placeholder={placeholder}
        type="text"
        className="form-input rounded-lg border-tremor-border bg-transparent pl-8 placeholder:text-sm placeholder:text-tremor-content hover:border-gray-300 focus:border-gray-300 focus:ring-1 focus:ring-tremor-content-strong"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
