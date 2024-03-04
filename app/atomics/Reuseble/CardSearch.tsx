import { Badge } from "@/components/ui/badge";
import { fetcher } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";
import useSWR from "swr";

type CardSearchProps = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  genres?: string[];
};

const CardSearch = ({
  id,
  title,
  poster_path,
  vote_average,
  genres,
}: CardSearchProps) => {
  const vote = Math.floor(vote_average * 10) / 10;

  return (
    <div className="flex gap-3 grow hover:bg-gray-600 rounded-md duration-100 cursor-pointer">
      <img
        className="w-[80px] rounded"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
      />
      <div className="flex flex-col justify-between gap-7 grow">
        <div className="space-y-2">
          <p className="line-clamp-1 font-semibold">{title}</p>
          <div className="flex flex-wrap gap-2">
            {genres?.map((genre, index) => (
              <Badge key={index}>{genre}</Badge>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <Star className="text-PrimaryYellow text-[10px]" /> {vote}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSearch;
