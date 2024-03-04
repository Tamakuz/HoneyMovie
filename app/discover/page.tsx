"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { fetcher } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import React from "react";
import useSWR from "swr";
import CardMovie from "../atomics/Reuseble/CardMovie";
import useQuery from "@/lib/useQuery";

const Discover = () => {
  useQuery({ page: 1 });
  const params = useSearchParams();
  const currentParamsQuery = params.get("category");
  const { data, isLoading } = useSWR(
    () => {
      switch (currentParamsQuery) {
        case "movie":
          return "/movie/now_playing";
        case "tvshow":
          return "/tv/popular";
        default:
          break;
      }
    },
    (url) => fetcher(url)
  );
  return (
    <>
      <div className="overflow-y-auto py-5">
        <h1 className="font-extrabold text-[30px] mb-5">Discover</h1>
        <div className="flex flex-wrap justify-around gap-5">
          {isLoading
            ? Array.from({ length: 20 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-[200px] h-[300px] rounded-xl bg-[#21242D]"
                />
              ))
            : data?.results.map((mov: any, index: any) => (
                <CardMovie
                  key={index}
                  idMovie={mov.id}
                  poster_path={mov.poster_path}
                  title={mov.title || mov.name}
                  vote_average={mov.vote_average}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default Discover;
