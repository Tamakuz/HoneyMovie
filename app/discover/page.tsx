"use client"
import { Skeleton } from "@/components/ui/skeleton";
import { fetcher } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import useSWR from "swr";
import CardMovie from "../atomics/Reuseble/CardMovie";
import { Pagination } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Discover = () => {
  const [page, setPage] = useState<number>(1);

  const params = useSearchParams();
  const currentParamsQuery = params.get("category");

  const { data, error, isValidating } = useSWR(
    () => {
      switch (currentParamsQuery) {
        case "movie":
          return `/movie/now_playing?page=${page}`;
        case "tvshow":
          return "/tv/popular";
        default:
          break;
      }
    },
    (url) => fetcher(url)
  );

  const changePage = (type: "increment" | "decrement") => {
    if (type === "increment" && page < data?.total_pages) {
      setPage((prev) => prev + 1);
    } else if (type === "decrement" && page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="overflow-y-auto py-5 scrollbar-none">
      <h1 className="font-extrabold text-[30px] mb-5">Discover</h1>
      <div className="flex flex-wrap justify-around gap-5">
        {isValidating || !data
          ? Array.from({ length: 20 }).map((_, index) => (
              <Skeleton
                key={index}
                className="w-[200px] h-[300px] rounded-xl bg-[#21242D]"
              />
            ))
          : data.results.map((mov: any, index: any) => (
              <CardMovie
                key={index}
                idMovie={mov.id}
                poster_path={mov.poster_path}
                title={mov.title || mov.name}
                vote_average={mov.vote_average}
              />
            ))}
      </div>
      <div className="overflow-hidden flex justify-center items-center gap-1 py-5 mt-3">
        <Button
          onClick={() => changePage("decrement")}
          isIconOnly
          size="sm"
          radius="sm"
          disabled={page === 1}
        >
          <ChevronLeft />
        </Button>
        <Pagination
          isCompact
          total={data?.total_pages}
          page={page}
          color="primary"
        />
        <Button
          onClick={() => changePage("increment")}
          isIconOnly
          size="sm"
          radius="sm"
          disabled={page === (data?.total_pages || 1)}
        >
          <ChevronRight />
        </Button>
      </div>
      {error && <div>Error fetching data...</div>}
    </div>
  );
};

export default Discover;
