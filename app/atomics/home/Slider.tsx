"use client"
import { fetcher } from "@/lib/utils";
import React from "react";
import useSWR from "swr";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";

const Slider = () => {
  const params = useSearchParams()
  const curentParamsUrl = params.get("category")
  const { data, isLoading } = useSWR(() => {
    switch (curentParamsUrl) {
      case "movie":
        return"/movie/now_playing"
      case "tvshow":
        return "/tv/airing_today";
      default:
        break;
    }
  }, (url) =>
    fetcher(url)
  );
  

  return (
    <div className="rounded-3xl overflow-hidden w-full relative">
      {isLoading ? (
        <Skeleton className="h-[500px] w-full rounded-xl bg-[#21242D]" />
      ) : (
        <Carousel
          className="h-[500px]"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="pl-0 rounded-xl">
            {data?.results.map((movie: any, index: any) => (
              <CarouselItem
                key={index}
                className="h-[500px] place-items-center overflow-hidden relative"
              >
                <img
                  className="object-cover object-center rounded-xl"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt=""
                />
                <div className="z-10 absolute top-0 w-full h-full flex flex-col justify-between p-10">
                  <p className="font-extrabold text-[48px]">{movie.title || movie.name}</p>
                  <div className="flex justify-between px-20">
                    <Button
                      size="lg"
                      className="bg-[#F9F9F9] hover:bg-[#F9F9F9] text-white font-bold w-[200px] h-[60px] shadow bg-opacity-20 hover:bg-opacity-20 text-2xl space-x-2"
                    >
                      <Plus size={48} strokeWidth={3} /> Watchlist
                    </Button>
                    <Button
                      size="lg"
                      className="bg-PrimaryYellow hover:bg-PrimaryYellow text-black font-bold w-[200px] h-[60px] shadow text-2xl"
                    >
                      Watch Now
                    </Button>
                  </div>
                </div>
                <div className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-black bg-opacity-50"></div>
                <div className="absolute top-0 right-0  w-1/2 h-full bg-gradient-to-l from-black bg-opacity-50"></div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-5 rounded-xl w-[50px] h-[50px] border-none bg-[#F9F9F9]  bg-opacity-25 hover:bg-opacity-25 hover:bg-[#F9F9F9] text-white" />
          <CarouselNext className="right-5 rounded-xl w-[50px] h-[50px] border-none bg-[#F9F9F9]  bg-opacity-25 hover:bg-opacity-25 hover:bg-[#F9F9F9] text-white" />
        </Carousel>
      )}
    </div>
  );
};

export default Slider;
