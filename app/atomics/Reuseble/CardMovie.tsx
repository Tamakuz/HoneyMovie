import React from "react";
import { Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type CardMovieProps = {
  idMovie: number,
  title: string;
  poster_path: string;
  vote_average: number
};

const CardMovie = ({ idMovie, title, poster_path, vote_average }: CardMovieProps) => {
  const vote = Math.floor(vote_average * 10) / 10
  
  return (
    <div className="rounded-2xl overflow-hidden w-fit relative">
      <img
        className="w-[200px]"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
      />
      <div className="z-10 absolute top-0 w-full h-full p-5 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <p className="font-extrabold text-[20px] line-clamp-1">{title}</p>
          <div className="flex items-center gap-1">
            <Star className="text-PrimaryYellow" /> {vote}
          </div>
        </div>
        <div className="flex justify-between items-center gap-3">
          <Button
            size="icon"
            className="bg-[#F9F9F9] hover:bg-[#F9F9F9] justify-center items-center bg-opacity-30 hover:bg-opacity-30"
          >
            <Plus className="h-4 w-4 font-extrabold text-white" />
          </Button>
          <Button
            size="icon"
            className="bg-PrimaryYellow hover:bg-PrimaryYellow text-black grow font-extrabold"
          >
            More Info
          </Button>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black opacity-70"></div>
      <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black opacity-70"></div>
    </div>
  );
};

export default CardMovie;
