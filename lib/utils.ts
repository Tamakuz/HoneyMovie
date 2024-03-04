import axios from "axios"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const Capitalize = (str: String) => str.charAt(0).toUpperCase() + str.slice(1)


const API_KEY = process.env.NEXT_PUBLIC_KEY_TMDB
export const fetcher = async (params: string) => {
  const {data} = await axios.get(`https://api.themoviedb.org/3${params}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};