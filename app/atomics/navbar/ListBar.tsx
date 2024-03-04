"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Category = "movie" | "tvshow" | "anime";

const ListBar = () => {
  const router = useRouter();
  const CurrentPathname = usePathname();
  const categories: Category[] = ["movie", "tvshow", "anime"];
  const [prevPathName, setPrevPathName] = useState<string>("/");
  const [category, setCategory] = useState<Category>("movie");

  useEffect(() => {
    if (CurrentPathname !== prevPathName) {
      router.push(`${CurrentPathname}?category=${category}`);
      setPrevPathName(CurrentPathname);
    } else {
      router.push(`?category=${category}`);
    }
  }, [CurrentPathname, prevPathName, category, router]);

  const ChangeCategory = (str: Category) => {
    setCategory(str);
  };

  return (
    <div className="flex gap-5 grow px-10 font-semibold">
      {categories.map((cat, index) => (
        <div
          key={index}
          className={`${
            category === cat &&
            "border-b-2 border-PrimaryYellow text-PrimaryYellow"
          } cursor-pointer`}
        >
          <p onClick={() => ChangeCategory(cat)} className="text-[20px]">
            {cat.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ListBar;
