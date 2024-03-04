"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import useQueryParams from "@/lib/useQuery";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import CardSearch from "../Reuseble/CardSearch";

interface Genre {
  id: number;
  name: string;
}

const Search = () => {
  const { changeQueryParams } = useQueryParams();
  const params = useSearchParams();

  const query = params.get("query");

  const changeQuery = (e: React.FormEvent<HTMLInputElement>) => {
    changeQueryParams("query", e.currentTarget.value.replace(/ /g, "+"));
  };

  const movieEndpoint = query && `/search/movie?query=${query}`;
  const tvEndpoint = query && `/search/tv?query=${query}`;
  const endpointMovieGenre = "/genre/movie/list";
  const endpointTvGenre = "/genre/tv/list";

  const { data: movieData } = useSWR(movieEndpoint, fetcher);
  const { data: tvData } = useSWR(tvEndpoint, fetcher);
  const { data: movieGenres } = useSWR(endpointMovieGenre, fetcher);
  const { data: tvGenres } = useSWR(endpointTvGenre, fetcher);

  const isLoading = !movieData && !tvData;

  const combinedResults = isLoading
    ? []
    : [...(movieData?.results || []), ...(tvData?.results || [])];

  const combinedGenres =
    !movieGenres && !tvGenres
      ? []
      : [...(movieGenres?.genres || []), ...(tvGenres?.genres || [])];

  const finalResults = combinedResults.map((combine) => {
    const matchedGenres = combine.genre_ids.map((idgenre: number) => {
      const genre = combinedGenres.find((item: Genre) => item.id === idgenre);
      return genre?.name;
    });
    return {
      ...combine,
      genre_ids: matchedGenres,
    };
  });

  return (
    <div className="relative">
      <div className="bg-[#21242D] rounded-md flex justify-center items-center px-3 ">
        <CiSearch />
        <Input
          onChange={(e) => changeQuery(e)}
          type="Text"
          placeholder="Search"
          className="bg-[#21242D] w-[300px] h-9 ring-0 focus-visible:ring-offset-0 focus-visible:ring-0 border-none"
        />
        <FaFilter />
      </div>
      {query && (
        <div
          className={`${isLoading ? "h-fit" : "h-[400px]"} absolute w-full bg-[#21242D] mt-1 rounded-md z-50 border border-gray-600 shadow p-2`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center w-full h-full">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="flex flex-col w-full h-full overflow-y-auto gap-3 scrollbar-thin">
              {finalResults.length === 0 ? (
                <div className="flex justify-center items-center w-full h-full">
                  <p>Not Found</p>
                </div>
              ) : (
                finalResults.map((searched: any, index: any) => (
                  <CardSearch
                    key={index}
                    id={searched.id}
                    title={searched.title || searched.original_name}
                    poster_path={searched.poster_path}
                    vote_average={searched.vote_average}
                    genres={searched.genre_ids}
                  />
                ))
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
